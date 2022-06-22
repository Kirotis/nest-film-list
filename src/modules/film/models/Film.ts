import { Prop, Schema } from '@nestjs/mongoose';
import { MaxLength, IsNotEmpty, Max, Min } from 'class-validator';
import { FilmGenre } from './film-genre.enum';
import { IFilm } from './IFilm';
import { FilmShort } from "./FilmShort";


@Schema()
export class Film implements IFilm {
  readonly _id: string;

  @Prop()
  @MaxLength(50)
  @IsNotEmpty()
  readonly name: string;

  @Prop()
  @MaxLength(50)
  @IsNotEmpty()
  readonly author: string;

  @Prop()
  readonly tagline: string;

  @Prop()
  @MaxLength(250)
  readonly description: string;

  @Prop()
  readonly genre: FilmGenre[];

  @Prop()
  readonly avatarImage?: string;

  @Prop()
  @Max(10)
  @Min(1)
  readonly rating?: number;

  static mapFilmToFilmShort(film: Film): FilmShort {
    return {
      _id: film._id,
      name: film.name,
      genre: film.genre,
      avatarImage: film.avatarImage,
      rating: film.rating,
    };
  }
}
