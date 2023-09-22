import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTodoComponent } from './todo/all-todo/all-todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { EditTodoComponent } from './todo/edit-todo/edit-todo.component';

const routes: Routes = [
  {
    path: '',
    component: AllTodoComponent,
  },
  {
    path: 'add-todo',
    component: AddTodoComponent,
  },
  {
    path: 'edit-todo/:id',
    component: EditTodoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
