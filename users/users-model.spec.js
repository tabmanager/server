const db = require('../database/dbConfig.js')
const users = require('./users-model.js')

describe('users model', () => {
  afterEach(async () => {
    await db('users').truncate()
  })

  describe('add()', () => {
    it('should insert provided user to the db', async () => {
      const user = await users.add({ username: 'Krrrrh', password: 'pass' })

      expect(user.username).toBe('Krrrrh')
      expect(user.password).toBe('pass')
    })
  })

  describe('findBy()', () => {
    it('should find user', async () => {
      await users.add({ username: 'lambda', password: 'pass' })
      const user = await users.findBy({ username: 'lambda' })
      expect(user[0].username).toBe('lambda')
    })
  })

  describe('findById()', () => {
    it('should show list of users by id', async () => {
      await users.add({ username: 'lambda', password: 'pass' })
      const user = await users.findById(1)
      expect(user.id).toBe(1)
    })
  })
})
