import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TodoCollectionDocument, todoCollection } from './schema/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(todoCollection.name) 
        private todoModel:Model<TodoCollectionDocument>,
        ){}

    async getAll():Promise<todoCollection[]>{
        return this.todoModel.find().exec();
    }
}
