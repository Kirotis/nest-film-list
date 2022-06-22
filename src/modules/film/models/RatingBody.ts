import { IsNotEmpty, Max, Min } from 'class-validator';
import { IRatingBody } from './IRatingBody';


export class RatingBody implements IRatingBody {
  @Max(10)
  @Min(1)
  @IsNotEmpty()
  readonly rating: number;
}
