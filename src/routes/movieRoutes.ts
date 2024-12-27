import { Router } from 'express';
import { Request, Response } from 'express';
import { MovieService } from '../services';
import NodeCache from 'node-cache';

const movieRouter = Router();

const cache = new NodeCache({stdTTL: 100, checkperiod: 120});

movieRouter.get('/movies', async (_req: Request, res: Response) => {
  const cacheKey = 'allMovies';
  const cachedMovies = cache.get(cacheKey);
  if (cachedMovies)
    return res.json(cachedMovies);

  const movies = await MovieService.getAllMovies();
  res.json(movies);
});

movieRouter.get('/search', async (req: Request, res: Response) => {
  const { title, genre } = req.query;

  const cacheKey = `searchMovies_${title as string}_${genre as string}`;
  const cachedMovies = cache.get(cacheKey);
  if (cachedMovies)
    return res.json(cachedMovies);

  const movies = await MovieService.searchMovies({ title: title as string, genre: genre as string });
  res.json(movies);
});

movieRouter.post('/movies', async (req: Request, res: Response) => {
  const movie = await MovieService.createMovie(req.body);
  res.json(movie);
});

movieRouter.put('/movies/:id', async (req: Request, res: Response) => {
  const movie = await MovieService.updateMovie(req.params.id, req.body);
  res.json(movie);
});

movieRouter.delete('/movies/:id', async (req: Request, res: Response) => {
  const movie = await MovieService.deleteMovie(req.params.id);
  res.json(movie);
});


export default movieRouter;