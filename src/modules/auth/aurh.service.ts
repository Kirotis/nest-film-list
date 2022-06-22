import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/users/user.service';
import { RegisterUser, User } from '../users/user.model';
import { JwtService } from '@nestjs/jwt';

type TokenObject = {
  access_token: string;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(user: RegisterUser) {
    const haveUser = await this.userService.getUserByLogin(user.login);
    if (haveUser) {
      return Promise.resolve('This login was registred');
    }
    const registerUser = await this.userService.createUser(user);
    return this.getToken(registerUser);
  }

  async login(login: string, passport: string) {
    const user = await this.userService.getUserByLogin(login);
    if (user?.password === passport) {
      return this.getToken(user);
    }
    return Promise.resolve('Not correct login or password');
  }

  private getToken(user: User): TokenObject {
    const payload = { username: user.login, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
