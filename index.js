require('dotenv').config()

//

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('./database/dbConfig.js')
const Users = require('./users/users-model.js')
const Tabs = require('./tabs/tabs-model.js')

const secret =
  process.env.JWT_SECRET || 'add a third table for many to many relationships'

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

// GET 
server.get('/', (req, res) => {
  res.send("It's alive!")
})

// REGISTER
server.post('/api/register', (req, res) => {
  let user = req.body

  const hash = bcrypt.hashSync(user.password, 10)

  user.password = hash

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    roles: ['User']
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secret, options)
}

// LOGIN
server.post('/api/login', (req, res) => {
  let { username, password } = req.body

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token,
          secret,
          roles: token.roles,
          user_id: user.id
        })
      } else {
        res.status(401).json({ message: 'Invalid Credentials' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

function restricted(req, res, next) {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ you: "Can't touch this!" })
      } else {
        req.decodedJwt = decodedToken
        next()
      }
    })
  } else {
    res.status(401).json({ you: 'Shall not pass!' })
  }
}

function checkRole(role) {
  return function(req, res, next) {
    if (req.decodedJwt.roles && req.decodedJwt.roles.includes(role)) {
      next()
    } else {
      res.status(403).json({ you: 'You have no power here' })
    }
  }
}

// GET USERS
server.get('/api/users', restricted, checkRole('User'), (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users, decodedToken: req.decodedJwt })
    })
    .catch(err => res.send(err))
})

server.get('/users', restricted, async (req, res) => {
  try {
    const users = await Users.find()

    res.json(users)
  } catch (error) {
    res.send(error)
  }
})

// GET list of tabs
server.get('/api/tabs', (req, res) => {
  Tabs.getTabs()
    .then(tabs => {
      const tabCollection = tabs.map(tab => {
        return {
          id: tab.id,
          title: tab.title,
          website: tab.website,
          favicon: tab.favicon
        }
      })
      res.status(200).json(tabs)
    })
    .catch(err =>
      res.status(500).json({
        errorMessage: err
      })
    )
})

// GET tab by id
server.get('/api/tabs/:user_id', async (req, res) => {
  try {
    const tabs = await Tabs.findByUserId(req.params.user_id)

    if (tabs) {
      // extract unique categories from JSON response
      let cats = []
      tabs.map(tab => {
        if (cats.includes(tab.category) === false) {
          cats.push(tab.category)
        }
      })

      // create a JSON object that return our tabs organized into unique categories
      resTabs = {}

      cats.map(cat => {
        // stores tabs for a given category
        catTabs = []
        //
        tabs.map(tab => {
          if (cat === tab.category) {
            catTabs.push(tab)
          }
        })

        resTabs[cat] = catTabs
      })
      res.status(200).json(resTabs)
    } else {
      res.status(404).json({ message: 'Tabs not found' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error retrieving the tabs'
    })
  }
})

// POST a new tab
server.post('/api/tabs', async (req, res) => {
  try {
    const newId = await Tabs.add(req.body)
    const newTab = await Tabs.findTabsBy({ id: newId[0] })
    res.status(201).json(newTab[0])
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error adding the tab'
    })
  }
})

// EDIT tab
server.put('/api/tabs/:id', async (req, res) => {
  try {
    const tab = await Tabs.update(req.params.id, req.body)
    if (tab) {
      res.status(200).json(tab)
    } else {
      res.status(404).json({ message: 'The Tab could not be found' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error updating the tab'
    })
  }
})

// DELETE tab
server.delete('/api/tabs/:id', async (req, res) => {
  try {
    const count = await Tabs.remove(req.params.id)
    if (count > 0) {
      res.status(200).json({ message: 'The tab has been deleted' })
    } else {
      res.status(404).json({ message: 'The tab could not be found' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error removing the tab'
    })
  }
})

const port = process.env.PORT || 4000
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))
