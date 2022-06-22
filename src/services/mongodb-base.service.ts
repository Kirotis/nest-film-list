import { Model, FilterQuery } from 'mongoose';

export abstract class MongodbBase<T> {
  constructor(protected readonly model: Model<T>) {}

  async createModel(object: T) {
    const model = await new this.model(object).save();
    return model.save().then((context) => {
      const obj = context.toObject();
      return obj;
    });
  }

  async findModelById(id: string, projection?: string) {
    return await this.model.findById(id, projection).exec();
  }

  async findManyByQuery(filter?: FilterQuery<T>, projection?: string) {
    return this.model.find(filter, projection).exec();
  }

  async findOneByQuery(filter?: FilterQuery<T>, projection?: string) {
    return this.model.findOne(filter, projection).exec();
  }

  async removeById(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }

  async updateModel(id, object: T) {
    return this.model.findByIdAndUpdate(id, object).exec();
  }
}
