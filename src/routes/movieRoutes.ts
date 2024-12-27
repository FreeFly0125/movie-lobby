import { Router } from 'express';
import { Request, Response } from 'express';

const movieRouter = Router();

movieRouter.get('/movies', async (req: Request, res: Response) => {});
movieRouter.get('/search', async (req: Request, res: Response) => {});
movieRouter.post('/movies', async (req: Request, res: Response) => {});
movieRouter.put('/movies/:id', async (req: Request, res: Response) => {});
movieRouter.delete('/movies/:id', async (req: Request, res: Response) => {});

export default movieRouter;