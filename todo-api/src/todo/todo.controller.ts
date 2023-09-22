import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { todoCollection } from './schema/todo.schema';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getAll() {
    return this.todoService.getAll();
  }

  @Post()
  async createTodo(@Body() todo: todoCollection) {
    return this.todoService.create(todo);
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.todoService.getById(id);
  }

  @Put('/:id')
  async updateTodo(@Param('id') id: string, @Body() todo: todoCollection) {
    return await this.todoService.update(id, todo);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string) {
    await this.todoService.delete(id);
  }
}
