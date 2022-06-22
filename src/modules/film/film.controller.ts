import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Film } from './models/Film';
import { FilmService } from './film.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';


@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getFilmById(@Param() { id }: { id: string }) {
    return await this.filmService.findModelById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createFilm(@Body() film: Film) {
    return await this.filmService.createModel(film);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateFilm(@Param() { id }: { id: string }, @Body() film: Film) {
    return await this.filmService.updateModel(id, film);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getFilms() {
    return await this.filmService.getFilmShortList();
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async removeFilm(@Param() { id }: { id: string }) {
    return await this.filmService.removeById(id);
  }

  // @Put('raiting/:id')
  // @UseGuards(JwtAuthGuard)
  // async setRating(
  //   @Param() { id }: { id: string },
  //   @Body() { rating }: RatingBody,
  // ) {
  //   return await this.filmService;
  // }
}
