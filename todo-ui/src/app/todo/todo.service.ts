import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { CreateOrUpdateTodo } from './create-or-update-todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Todo[]>('http://localhost:3000/todo');
  }

  create(todo: CreateOrUpdateTodo) {
    return this.http.post('http://localhost:3000/todo', todo);
  }

  getById(id: string) {
    return this.http.get<Todo>(`http://localhost:3000/todo/${id}`);
  }

  update(id: string, todo: CreateOrUpdateTodo) {
    return this.http.put(`http://localhost:3000/todo/${id}`, todo);
  }

  delete(id: string) {
    return this.http.delete(`http://localhost:3000/todo/${id}`);
  }
}
