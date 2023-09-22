import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.css']
})
export class AllTodoComponent implements OnInit {

  constructor(private todoService:TodoService) {}

  todo:Todo[] = [];

  ngOnInit():void {
    this.getAll();
  }

  getAll(){
    this.todoService.get().subscribe((data) => {
      this.todo = data;
    })
  }

}
