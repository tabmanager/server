const request = require('supertest');
const sessions = require('./index');

describe('index.js tests', () => {
    describe('POST /api/register endpoint', () => {
        beforeEach(() => {
            jest.setTimeout(10000);
          });
        
        it('Should return an error if there is no username', async () => {
            const noUsername = {password: 'test'};

            let response = await request(sessions).post('/api/register/').send(noUsername);

            expect(response.body).toEqual({
                error: `Make sure to include a username and your name!`
            })
        });
        
        it('Should return an error if there is no password', async () => {
            const noPassword = {username: 'test'};

            let response = await request(sessions).post('/api/register/').send(noPassword);

            expect(response.body).toEqual({
                error: `Please include a password.`
            })
        });
    });

    describe('POST /api/login endpoint', () => {
        it('Should return an error if username was not supplied', async () => {
            const noUsername = { password: 'test'};

            let response = await request(sessions).post('/api/login').send(noUsername);

            expect(response.body).toEqual({ error: `Please include a username!` });
        });

        it('should return an error if no password was supplied', async () => {
            const noPassword = { username: 'test'};

            let response = await request(sessions).post('/api/login').send(noPassword);

            expect(response.body).toEqual({ error: `Please include a password!` });
        });
    })
});