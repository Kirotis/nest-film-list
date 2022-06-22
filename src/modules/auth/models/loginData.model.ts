import { User } from 'src/modules/users/user.model';
import { IsNotEmpty } from 'class-validator';

export class LoginData implements Pick<User, 'login' | 'password'> {

  @IsNotEmpty()
  readonly login: string;

  @IsNotEmpty()
  readonly password: string;
}
