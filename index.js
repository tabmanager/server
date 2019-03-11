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


// module.exports = server => {
//     server.use('/api/user-access', userAccessRouter);
//     server.use('/api/tab-collection', tabListRouter);
//     server.use('/api/tab-edit', editRouter)
//     server.get('/', root);
//   };
  
//   function root(req, res) {
  
//     res.send('It is alive!');
  
// }

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

//   server.get('/api/tabs/:user_id', async (req, res) => {
//     try {
//         const response = await Tabs.findByUserId(req.params.id);

//         if (response.length > 0) {
//             if (req.decodedToken.user_id.toString() === response[0].user_id.toString()) {
//                 res.status(200).json({ id: response[0].id, text: response[0].text });
//             } else {
//                 res.status(403).json({
//                     error: `You are not allowed to see these tabs!`
//                 });
//             }
//         } else {
//             res.status(404).json({
//                 error: `Couldn't find a user with that Id!`
//             });
//         }
//     } catch (err) {
//         res.status(500).json({
//             error: `Could not get tabs at this time.`
//         });
//     }
// });

 server.get('/api/tabs/:user_id', (req, res) => {
    db('tabs')
    // Tabs.findByUserId()
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

  // POST a new tab

  server.post('/api/add_tab', (req, res) => {
    const { title, website } = req.body;
    let { date, favicon, short_description, full_description } = req.body;
    if(!date) date = 'na';
    if(!favicon) favicon = 'na';
    if(!short_description) short_description = 'na';
    if(!full_description) full_description = 'na';

    Tabs.addTab()
    // db('tabs')
    .insert({title, website, favicon, date, short_description, full_description})
    .then(id => {
      res.status(201).json({id: id[0], title, website, favicon, date, short_description, full_description});
    })
    .catch(err => res.status(500).json({errorMessage: err}))
  });  

  // EDIT tab
  server.put('/edit_tab/:tab_id', (req, res) => {
    const { tab_id } = req.params
    const { title, website } = req.body;
    let { date, favicon, short_description, full_description } = req.body;
  
    db('tabs')
    .where({id: tab_id})
    .update({title, website, favicon, date, short_description, full_description})
    .then(id => {
      res.status(201).json({id: id[0], title, website, favicon, date, short_description, full_description});
    })
    .catch(err => res.status(500).json({errorMessage: err}))
  });

  // DELETE tab
  server.delete('/delete_tab/:tab_id', (req, res) => {
    const { tab_id } = req.params;
  
    // db('tabs')
    Tabs.delete()
    .where({id: tab_id})
    .del()
    .then(count => {
      res.status(204).end()
    })
    .catch(err => res.status(500).json({errorMessage: err}))
  });  

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));