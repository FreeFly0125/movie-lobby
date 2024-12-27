import mongoose, { Schema, Document } from 'mongoose';

export interface IMovie extends Document {
  title: string;
  genre: string;
  rating: number;
  streamingLink?: string;
  createdAt: Date;
  updatedAt: Date;
}

export const schema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 10 },
  streamingLink: { type: String },
}, { timestamps: true });

export const Movie = mongoose.model<IMovie>('Movie', schema);
