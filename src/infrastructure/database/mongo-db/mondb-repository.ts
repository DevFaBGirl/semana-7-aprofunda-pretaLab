import { Dancer } from '../../../domain/dancer';
import { DancerRepository } from './../../../application/repositories/dancer-repository';
import { DancerModel } from './model-dancer';

export class MongoDbRepository implements DancerRepository {
  async save(dancer: Dancer): Promise<void> { 
    const newDancer = new DancerModel(dancer);
    await newDancer.save();
  }

  async findAll(): Promise<Dancer[]> {
    return await DancerModel.find();
  }

  async update(id: string, bodyParams: Partial<Dancer>): Promise<Dancer | null> {
    return await DancerModel.findByIdAndUpdate(id, bodyParams, { new: true });
  }

  async delete(id: string): Promise<void> {
    await DancerModel.findByIdAndDelete(id);
  }
}