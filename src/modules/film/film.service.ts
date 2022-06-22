import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilmShort } from "./models/FilmShort";
import { Film } from "./models/Film";
import { FilmDocument } from "./models/FilmDocument";
import { Model } from 'mongoose';
import { MongodbBase } from 'src/services/mongodb-base.service';

@Injectable()
export class FilmService extends MongodbBase<Film> {
  constructor(@InjectModel(Film.name) filmModel: Model<FilmDocument>) {
    super(filmModel);
  }

  async getFilmShortList(): Promise<FilmShort[]> {
    return super
      .findManyByQuery()
      .then((films) => films.map<FilmShort>(Film.mapFilmToFilmShort));
  }
}
