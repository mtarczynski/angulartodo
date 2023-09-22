import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { CreateOrUpdateTodo } from '../create-or-update-todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private todoService:TodoService,
    private router:Router
    ){}

  itemId:string = '';

  todo:CreateOrUpdateTodo = {
    name: '',
    description: '',
    isDone: false,
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.itemId = param.get('id') ?? ''; 
      this.getById();
    });
  }

  getById() {
    this.todoService.getById(this.itemId).subscribe((data) => {
      this.todo.name = data.name;
      this.todo.description = data.description;
      this.todo.isDone = data.isDone;
    });
  }

  update() {
    this.todoService
      .update(this.itemId, this.todo)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
