const db = require('../database/dbConfig.js');
const Users = require('./users-model.js')

describe('users model', () => {
    describe('add()', () => {
        afterEach(async () => {
            await db('users').truncate()
        })
        
        it('should insert provided user to the db', async () => {
            const user = await Users.add({username: 'Krrrrh', password: 'pass'});
            
            expect(user.username).toBe('Krrrrh');
            expect(user.password).toBe('pass');
        });
    });








    


    // describe('findBy()', () => {
    //     afterEach(async () => {
    //         await db('users').truncate()
    //     })
        
    //     it('should find user', async () => {
    //         const user = await Users.findBy({username: 'K'});
            
    //         expect(user.username).toBe('K');
    //     });
    // });



    // describe('findById()', () => {
    //     afterEach(async () => {
    //         await db('users').truncate()
    //     })
        
    //     it('should show list of users by id', async () => {
    //         const user = await Users.findById({id: 1});
            
    //         expect(user.id).toBe(1);
    //     });
    // });

  
});