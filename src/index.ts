import { MESSAGES } from './consts';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { Logger } from './utils';
import { connectToDatabase } from './database';
import appRouter from './routes';

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(appRouter)
  .use('/health', (_req, res) => res.send('OK'));

const PORT = process.env.SERVER_PORT || 4000;

async function startServer() {
  try {
    await connectToDatabase();
    
    app.listen(PORT, () => {
      Logger.log(MESSAGES.MSG_SERVER_STARTED);
    });
  } catch (error) {
    Logger.error(MESSAGES.MSG_SERVER_START_FAILED, error);
    process.exit(1);
  }
}

startServer();

export default app;
