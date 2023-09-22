import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTodoComponent } from './todo/all-todo/all-todo.component';

const routes: Routes = [{
  path:'',
  component: AllTodoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
