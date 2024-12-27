import { Router } from 'express';
import movieRouter from './movieRoutes';

const appRouter = Router();

appRouter.use(movieRouter);

export default appRouter;