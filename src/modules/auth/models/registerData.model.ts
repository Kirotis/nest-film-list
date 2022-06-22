import { IsNotEmpty, MaxLength } from 'class-validator';
import { RegisterUser } from 'src/modules/users/user.model';
import { LoginData } from './loginData.model';

export class RegisterData extends LoginData implements RegisterUser {
  @MaxLength(100)
  @IsNotEmpty()
  readonly description: string;

  readonly avatarImage?: string;
}
