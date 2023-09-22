import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { TodoCollectionSchema } from './schema/todo.schema'
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';


@Module({
    imports:[
        MongooseModule.forFeature([{
            name: 'todoCollection',
            schema: TodoCollectionSchema,
            collection: 'todoCollection'
        }])
    ],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoModule {}
