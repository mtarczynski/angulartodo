import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TodoCollectionDocument, todoCollection } from './schema/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(todoCollection.name)
    private todoModel: Model<TodoCollectionDocument>,
  ) {}

  async getAll(): Promise<todoCollection[]> {
    return this.todoModel.find().exec();
  }

  async create(todo: todoCollection) {
    const newTodo = new this.todoModel(todo);
    return newTodo.save();
  }

  async getById(id: string) {
    return await this.todoModel.findById(id).exec();
  }

  async update(id: string, todo: todoCollection) {
    return await this.todoModel.findByIdAndUpdate(id, todo, { new: true });
  }

  async delete(id: string) {
    await this.todoModel.findByIdAndRemove(id);
  }
}
