import { IFilm } from './IFilm';

export type FilmShort = Pick<
  IFilm, '_id' | 'name' | 'genre' | 'avatarImage' | 'rating'
>;
