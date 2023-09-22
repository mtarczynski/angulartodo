import { Component, OnInit } from '@angular/core';
import { CreateOrUpdateTodo } from '../create-or-update-todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor(private todoService: TodoService, private router: Router) {}

  todo: CreateOrUpdateTodo = {
    name: '',
    description: '',
    isDone: false,
  };

  ngOnInit(): void {}

  create() {
    this.todoService.create(this.todo).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
