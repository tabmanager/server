const knex = require('knex')

const knexConfig = require('../knexfile.js')

module.exports = knex(knexConfig.production) // change to development to test
