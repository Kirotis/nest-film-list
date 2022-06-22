import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmSchema } from "./models/FilmSchema";
import { Film } from "./models/Film";
import { FilmController } from './film.controller';
import { FilmService } from './film.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Film.name, schema: FilmSchema }]),
  ],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
