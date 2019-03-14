const request = require('supertest')
const server = require('./index')

// GET
describe('tests', () => {
  it('should return something', async () => {
    const response = await request(server).get('/')
    expect(response.text).toBe("It's alive!")
  })
})

describe('index.js tests', () => {
  it("should return an list of tabs", async () => {
    const response = await request(server).get(`/api/tabs/`);
    expect(response.status).toBe(200);
  });

  it('Should return JSON', async () => {
    const response = await request(server).get('/api/tabs/');
    expect(response.type).toBe('application/json');
});

  it("Should return an array of tabs even if array is empty", async () => {
    const response = await request(server).get("/api/tabs/");
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should return an array of tabs for a specific user_id", async () => {
    let response = await request(server).get(`/api/tabs/:user_id`);
    expect(response.status).toBe(200);
  });

});

// POST
describe("POST index.js tests", () => {
  it("Should return status 201 when successful", async () => {

      const newTab = 
      { 
          title: "Test", 
          website: "www.test.com" 
      };

  const response = await request(server)
    .post("/api/tabs")
    .send(newTab)
  expect(response.status).toBe(201);
  });

  it('should return status 201 if there is a username and password', async () => {
      const passUsername = { password: 'pass', username: 'Lambda' };
  
      let response = await request(server).post('/api/register/').send(passUsername);
      expect(response.status).toBe(201);
  });

  it('should return status 200 if there is a username and password', async () => {
    const passUsername = { password: 'pass', username: 'Lambda' };

    let response = await request(server).post('/api/login/').send(passUsername);
    expect(response.status).toBe(200);
});

});