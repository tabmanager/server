require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 

const db = require('./database/dbConfig.js');
const Users = require('./users/users-model.js');
const Tabs = require('./tabs/tabs-model.js');


const secret =
  process.env.JWT_SECRET || 'add a third table for many to many relationships';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send("It's alive!");
});

server.post('/api/register', (req, res) => {
  let user = req.body;

 
  const hash = bcrypt.hashSync(user.password, 10);

  
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


function generateToken(user) {
  const payload = {
    subject: user.id, 
    username: user.username,
    roles: ['User'],
    
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secret, options);
}

server.post('/api/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
          secret,
          roles: token.roles,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function restricted(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        
        res.status(401).json({ you: "Can't touch this!" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ you: 'Shall not pass!' });
  }
}

function checkRole(role) {
  return function(req, res, next) {
    if (req.decodedJwt.roles && req.decodedJwt.roles.includes(role)) {
      next();
    } else {
      res.status(403).json({ you: 'You have no power here' });
    }
  };
}

server.get('/api/users', restricted, checkRole('User'), (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users, decodedToken: req.decodedJwt });
    })
    .catch(err => res.send(err));
});

server.get('/users', restricted, async (req, res) => {
  try {
    const users = await Users.find();

    res.json(users);
  } catch (error) {
    res.send(error);
  }
});

 // GET list of tabs
 server.get('/api/tabs', (req, res) => {
    // db('tabs')
    Tabs.getTabs()
    .then(tabs => {
      const tabCollection = tabs.map(tab => {
        return { id: tab.id, title: tab.title, website: tab.website, favicon: tab.favicon };
      });
      res.status(200).json(tabs);
    })
    .catch(err => res.status(500).json({
      errorMessage: err
    }))
  });

  // GET tab by id
  server.get('/:user_id', async (req, res) => {
    try {
      const tab = await Tabs.findByUserId(req.params.user_id);
  
      if (tab) {
        res.status(200).json(tab);
      } else {
        res.status(404).json({ message: 'Tabs not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the tabs',
      });
    }
  });


//  server.get('/api/tabs/:user_id', (req, res) => {
//     db('tabs')
//     // Tabs.findByUserId()
//     .then(tabs => {
//       const tabCollection = tabs.map(tab => {
//         return { id: tab.id, title: tab.title, website: tab.website, favicon: tab.favicon };
//       });
//       res.status(200).json(tabs);
//     })
//     .catch(err => res.status(500).json({
//       errorMessage: err
//     }))
//   });



  // POST a new tab

  server.post('/tabs', async (req, res) => {
    try {
      const tab = await Tabs.add(req.body);
      res.status(201).json(tab);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error adding the hub',
      });
    }
  });

  // server.post('/api/add_tab', (req, res) => {
  //   const { title, website } = req.body;
  //   let { date, favicon, short_description, full_description } = req.body;
  //   if(!date) date = 'na';
  //   if(!favicon) favicon = 'na';
  //   if(!short_description) short_description = 'na';
  //   if(!full_description) full_description = 'na';

  //   Tabs.addTab()
  //   // db('tabs')
  //   .insert({title, website, favicon, date, short_description, full_description})
  //   .then(id => {
  //     res.status(201).json({id: id[0], title, website, favicon, date, short_description, full_description});
  //   })
  //   .catch(err => res.status(500).json({errorMessage: err}))
  // });  


  // EDIT tab
  server.put('/:id', async (req, res) => {
    try {
      const tab = await Tabs.update(req.params.id, req.body);
      if (tab) {
        res.status(200).json(tab);
      } else {
        res.status(404).json({ message: 'The Tab could not be found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error updating the tab',
      });
    }
  });


  // DELETE tab
  server.delete('/:id', async (req, res) => {
    try {
      const count = await Tabs.remove(req.params.id);
      if (count > 0) {
        res.status(200).json({ message: 'The tab has been nuked' });
      } else {
        res.status(404).json({ message: 'The tab could not be found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error removing the tab',
      });
    }
  });
 

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));