import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder }       from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { App }   from './app';
import { TodoCmp }   from './todo/components/todo_cmp';
import { TodoService }   from './todo/services/todo_service';
import { todoRouting } from './todo/routes/todo_routes';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      todoRouting
    ],
    declarations: [
      App,
      TodoCmp,
    ],
    providers: [
      TodoService,
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}
