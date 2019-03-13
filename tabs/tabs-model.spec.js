const db = require('../database/dbConfig.js')
const tabs = require('./tabs-model.js')
const users = require('../users/users-model')

describe('tabs model', () => {
  beforeEach(async () => {
    await db('users').truncate()
    await db('tabs').truncate()
  })

  describe('add()', () => {
    it('should insert provided tab to the db', async () => {
      await users.add({ username: 'lambda', password: 'pass' })
      const tab = await tabs.add({
        title: 'Lambda',
        website: 'https://lambdaschool.com/',
        date: 1552276800,
        user_id: 1,
        category: 'learn',
        favicon:
          'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg',
        short_description:
          'Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.',
        full_description:
          "Lambda School trains people online to be software engineers at no up-front cost. Instead of paying tuition, students can agree to pay a percentage of their income after they're employed, and only if they're making more than $50k per year. If you do not find a job, or don't reach that level of income, you will never pay a cent."
      })

      expect(tab).toEqual([1])
    })
  })

  describe('findBy()', () => {
    it('should find tab', async () => {
      await users.add({ username: 'lambda', password: 'pass' })
      await tabs.add({
        title: 'Lambda',
        website: 'https://lambdaschool.com/',
        date: 1552276800,
        user_id: 1,
        category: 'learn',
        favicon:
          'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg',
        short_description:
          'Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.',
        full_description:
          "Lambda School trains people online to be software engineers at no up-front cost. Instead of paying tuition, students can agree to pay a percentage of their income after they're employed, and only if they're making more than $50k per year. If you do not find a job, or don't reach that level of income, you will never pay a cent."
      })

      const tab = await tabs.findByUserId(1)

      expect(tab[0].id).toBe(1)
      expect(tab[0].user_id).toBe(1)
      expect(tab[0].category).toBe('learn')
      expect(tab[0].title).toBe('Lambda')
    })
  })

  describe('remove()', () => {
    it('should delete a tab', async () => {
      await users.add({ username: 'lambda', password: 'pass' })
      const added = await tabs.add({
        title: 'Lambda',
        website: 'https://lambdaschool.com/',
        date: 1552276800,
        user_id: 1,
        category: 'learn',
        favicon:
          'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg',
        short_description:
          'Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.',
        full_description:
          "Lambda School trains people online to be software engineers at no up-front cost. Instead of paying tuition, students can agree to pay a percentage of their income after they're employed, and only if they're making more than $50k per year. If you do not find a job, or don't reach that level of income, you will never pay a cent."
      })

      const tab = await tabs.remove(added[0])

      console.log(tab)

      expect(tab).toBe(1)
    })
  })
})
