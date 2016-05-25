import {
  Component,
  Inject
} from '@angular/core';

import {
  FormBuilder,
  Validators,
  ControlGroup,
  Control
} from '@angular/common';

import {TodoModel} from '../models/todo_model';
import {TodoService} from '../services/todo_service';

@Component({
    selector: 'todo',
    templateUrl: 'app/todo/templates/todo.html',
    styleUrls: ['app/todo/styles/todo.css'],
    providers: [TodoService, FormBuilder]
})
export class TodoCmp {
    todo: TodoModel;
    todoForm: ControlGroup;
    todoList: TodoModel[] = [];

    constructor(@Inject(TodoService) private _todoService: TodoService,
                @Inject(FormBuilder) fb: FormBuilder) {

        this.todoForm = fb.group({
           "message": ["", Validators.required]
        });
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
                (<Control>this.todoForm.controls['message']).updateValue("");
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
