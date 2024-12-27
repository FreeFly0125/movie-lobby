import { MovieSchema } from 'database';
import { Types } from 'mongoose';

export const getAllMovies = async () => {
  const movies = await MovieSchema.Movie.find();
  return movies;
};

export const searchMovies = async (params: {title?: string, genre?: string}) => {
  const searchQuery = [];
  if (params.title) {
    searchQuery.push({title: { $regex: params.title, $options: 'i' }});
  }
  if (params.genre) {
    searchQuery.push({genre: { $regex: params.genre, $options: 'i' }});
  }
  const movies = await MovieSchema.Movie.find({
    $or: searchQuery,
  });
  return movies;
};

export const createMovie = async (movie: MovieSchema.IMovie) => {
  const newMovie = await MovieSchema.Movie.create(movie);
  return newMovie;
};

export const updateMovie = async (id: string, movie: MovieSchema.IMovie) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error('Invalid movie ID');
  }

  const updatedMovie = await MovieSchema.Movie.findByIdAndUpdate(id, movie);
  return updatedMovie;
};

export const deleteMovie = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error('Invalid movie ID');
  }
      
  const deletedMovie = await MovieSchema.Movie.findByIdAndDelete(id);
  return deletedMovie;
};
