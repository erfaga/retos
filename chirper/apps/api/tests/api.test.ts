import request from 'supertest';
import { app } from '../src/server'; // Adjust the import based on your server setup

describe('API Endpoints', () => {
  it('should return a 200 status for the root endpoint', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        password: 'testpassword',
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('token');
  });

  it('should login an existing user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword',
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should create a new tweet', async () => {
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword',
      });

    const token = loginResponse.body.token;

    const response = await request(app)
      .post('/api/tweets')
      .set('Authorization', `Bearer ${token}`)
      .send({
        content: 'Hello, world!',
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should retrieve all tweets', async () => {
    const response = await request(app).get('/api/tweets');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should delete a tweet', async () => {
    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'testpassword',
      });

    const token = loginResponse.body.token;

    const tweetResponse = await request(app)
      .post('/api/tweets')
      .set('Authorization', `Bearer ${token}`)
      .send({
        content: 'Tweet to delete',
      });

    const tweetId = tweetResponse.body.id;

    const deleteResponse = await request(app)
      .delete(`/api/tweets/${tweetId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(deleteResponse.status).toBe(204);
  });
});