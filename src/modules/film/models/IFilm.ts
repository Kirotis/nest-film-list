import { MongoModelBase } from 'src/models/mongo-base.model';
import { FilmGenre } from './film-genre.enum';


export interface IFilm extends MongoModelBase {
  readonly name: string;
  readonly author: string;
  readonly tagline: string;
  readonly description: string;
  readonly genre: FilmGenre[];
  readonly avatarImage?: string;
  readonly rating?: number;
}
