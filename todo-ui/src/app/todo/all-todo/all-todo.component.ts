import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { CreateOrUpdateTodo } from '../create-or-update-todo';
import { ActivatedRoute, Router } from '@angular/router';

declare var window:any;

@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.css']
})
export class AllTodoComponent implements OnInit {

  constructor(private todoService:TodoService, private route:ActivatedRoute, private router:Router) {}

  todo:Todo[] = [];
  deleteModal:any;
  itemToDelete:string = '';

  statusModal:any;
  itemToComplete:boolean = false;

  itemId:string = '';
  isDone: boolean = false;

  todoChange:CreateOrUpdateTodo = {
    name: '',
    description: '',
    isDone: false,
  }

  ngOnInit():void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
    this.getAll();
  }

  openDeletePopup(id:string){
    this.itemToDelete = id;
    this.deleteModal.show();
  }

  getAll(){
    this.todoService.get().subscribe((data) => {
      this.todo = data;
    })
  }

  delete(){
    this.todoService.delete(this.itemToDelete)
    .subscribe(() => {
      this.todo = this.todo.filter(_ => _._id !== this.itemToDelete)
      this.deleteModal.hide();
    })
  }

  complete() {
    this.todoChange.isDone = !this.todoChange.isDone;
  }
}