import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTodoComponent } from './todo/all-todo/all-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { EditTodoComponent } from './todo/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTodoComponent,
    AddTodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
