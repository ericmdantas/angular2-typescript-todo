import {
  Component,
  Inject
} from '@angular/core';

import {
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';

import {TodoModel} from '../models/todo_model';
import {TodoService} from '../services/todo_service';

@Component({
    selector: 'todo',
    templateUrl: 'app/todo/templates/todo.html',
    styleUrls: ['app/todo/styles/todo.css']
})
export class TodoCmp {
    todo: TodoModel;
    todoForm: {message: string};
    todoList: TodoModel[] = [];

    constructor(private _todoService: TodoService) {
        this.todoForm = {
           message: ""
        };
    }

    customTrackBy(index:number, obj: TodoModel): number {
      return obj.createdAt;
    }

    add(message: string):void {
        this.todo = new TodoModel(message);

        this._todoService
            .add(this.todo)
            .subscribe(result => {
                this.todoList.push(result);
                this.todoForm.message = "";
            });
    }

    remove(id: number):void {
        this._todoService
            .remove(id)
            .subscribe(id => {
                this.todoList.forEach((todo, index) => {
                    if (todo.createdAt === id) {
                        return this.todoList.splice(index, 1);
                    };
                });
            });
    }
}
