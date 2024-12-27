import { MESSAGES } from '../consts';
import mongoose from 'mongoose';
import { Logger } from '../utils';
export * as MovieSchema from './schemas/movie';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/movie_lobby';

const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};


export async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, options);
    Logger.log(MESSAGES.MSG_DB_CONNECT_SUCCESS);
  } catch (error) {
    Logger.error(MESSAGES.MSG_DB_CONNECT_FAIL, error);
    throw error;
  }
}


mongoose.connection.on('error', (err) => {
  Logger.error(MESSAGES.MSG_DB_CONNECT_FAIL, err);
});

mongoose.connection.on('disconnected', () => {
  Logger.log(MESSAGES.MSG_DB_CONNECT_CLOSED);
});


process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});

export default mongoose.connection;