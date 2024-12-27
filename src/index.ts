import { MESSAGES } from 'consts';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { Logger } from 'utils';

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .use('/health', (_req, res) => res.send('OK'));

const PORT = process.env.SERVER_PORT || 4000;

app.listen(PORT, () => {
  Logger.log(MESSAGES.MSG_SERVER_STARTED);
});

export default app;
