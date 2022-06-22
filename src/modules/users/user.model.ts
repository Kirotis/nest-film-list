import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  readonly _id?: string;

  @Prop()
  readonly login: string;

  @Prop()
  readonly password: string;

  @Prop()
  readonly dateCreated: number;

  @Prop()
  readonly description: string;

  @Prop()
  readonly avatarImage?: string;
}

export type RegisterUser = Pick<User, 'avatarImage' | 'description' | 'login' | 'password'>

export type UserDTO = Partial<Omit<User, 'passport'>>

export const UserSchema = SchemaFactory.createForClass(User);
