import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) {}

  get(){
    return this.http.get<Todo[]>("http://localhost:3000/todo");
  }
}
