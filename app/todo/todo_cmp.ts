/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {NgFor} from 'angular2/directives';
import {Inject} from 'angular2/di';
import {FormBuilder, formDirectives, Validators, ControlGroup} from 'angular2/forms';
import {TodoModel} from 'app/todo/todo_model.js';
import {TodoService} from 'app/todo/todo_service.js';

@Component({
    selector: 'todo',
    viewBindings: [TodoService, FormBuilder]
})
@View({
    templateUrl: 'app/todo/todo.html',
    styleUrls: ['app/todo/todo.css'],
    directives: [formDirectives, NgFor]
})

export class TodoCmp {
    todo: TodoModel;
    todoService: TodoService;
    todoForm: ControlGroup;
    todoList: TodoModel[] = [];

    constructor(@Inject(TodoService) todoService: TodoService, @Inject(FormBuilder) fb: FormBuilder) {
        this.todoService = todoService;

        this.todoForm = fb.group({
           "message": ["", Validators.required]
        });
    }

    add(message: string):void {
        this.todo = new TodoModel(message);

        this.todoService
            .add(this.todo)
            .subscribe(result => {
                this.todoList.push(result);
            });
    }

    remove(id: number):void {
        this.todoService
            .remove(id)
            .subscribe(id => {
                this.todoList.forEach((tl, index) => {
                    if (tl.createdAt === id) {
                        return this.todoList.splice(index, 1);
                    };
                });
            });
    }
}