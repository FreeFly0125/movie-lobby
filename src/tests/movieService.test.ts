import request from 'supertest';
import app from '../index';
import { describe, it, expect } from '@jest/globals';

describe('Movie Service API', () => {
  it('should create a new movie', async () => {
    const newMovie = { title: 'New Movie', genre: 'Drama', rating: 9 };
    
    const response = await request(app).post('/movies').send(newMovie);
    
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(newMovie);
  });

  it('should get all movies', async () => {
    const response = await request(app).get('/movies');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should search movies by title', async () => {
    const response = await request(app).get('/search?title=New Movie');
    
    expect(response.status).toBe(200);
    expect(response.body[0].title).toBe('New Movie');
  });

  it('should update an existing movie', async () => {
    const newMovie = { title: 'Movie to Update', genre: 'Action', rating: 8 };
    const createResponse = await request(app).post('/movies').send(newMovie);
    
    const updatedMovie = { title: 'Updated Movie', genre: 'Action', rating: 10 };
    const response = await request(app).put(`/movies/${createResponse.body._id}`).send(updatedMovie);
    
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Movie to Update');
  });

  it('should delete a movie', async () => {
    const newMovie = { title: 'Movie to Delete', genre: 'Horror', rating: 5 };
    const createResponse = await request(app).post('/movies').send(newMovie);
    
    const response = await request(app).delete(`/movies/${createResponse.body._id}`);
    
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Movie to Delete');
  });
});
