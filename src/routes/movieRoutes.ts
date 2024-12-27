import { Router } from 'express';
import { Request, Response } from 'express';
import { MovieService } from '../services';

const movieRouter = Router();

movieRouter.get('/movies', async (_req: Request, res: Response) => {
  const movies = await MovieService.getAllMovies();
  res.json(movies);
});

movieRouter.get('/search', async (req: Request, res: Response) => {
  const { title, genre } = req.query;
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