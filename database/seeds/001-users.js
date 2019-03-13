const bcrypt = require('bcryptjs')
exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        { username: 'lambda', password: bcrypt.hashSync('pass', 12) },
        { username: 'tabless', password: bcrypt.hashSync('pass', 12) },
        { username: 'asdf', password: bcrypt.hashSync('pass', 12) },
        { username: 'html', password: bcrypt.hashSync('pass', 12) },
        { username: 'css', password: bcrypt.hashSync('pass', 12) },
        { username: 'react', password: bcrypt.hashSync('pass', 12) },
        { username: 'redux', password: bcrypt.hashSync('pass', 12) },
        { username: 'javascript', password: bcrypt.hashSync('pass', 12) }
      ])
    })
}
