import { SchemaFactory } from '@nestjs/mongoose';
import { Film } from './Film';


export const FilmSchema = SchemaFactory.createForClass(Film);
