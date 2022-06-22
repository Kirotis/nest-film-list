import { InjectModel } from '@nestjs/mongoose';
import { MongodbBase } from 'src/services/mongodb-base.service';
import { RegisterUser, User, UserDocument, UserDTO } from './user.model';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends MongodbBase<User> {
  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel);
  }

  createUser(user: RegisterUser) {
    const newUser: User = {
      ...user,
      dateCreated: Date.now(),
    };
    return this.createModel(newUser);
  }

  getUserByLogin(login: string) {
    return this.findOneByQuery({ login });
  }

  async getUserById(id: string): Promise<UserDTO> {
    return await super.findModelById(id).then((userQuery) => {
      const { password, ...userDTO } = userQuery.toObject();
      return userDTO;
    });
  }
}
