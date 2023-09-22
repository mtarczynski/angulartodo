import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

declare var window:any;

@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.css']
})
export class AllTodoComponent implements OnInit {

  constructor(private todoService:TodoService) {}

  todo:Todo[] = [];
  deleteModal:any;
  itemToDelete:string = '';

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

}
