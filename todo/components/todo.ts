/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Validators, ControlGroup, FormBuilder, formDirectives} from 'angular2/forms';
import {TodoService} from '../services/todo_service';
import {Inject} from 'angular2/di';
import {NgFor} from 'angular2/directives';
import {ImportantText} from '../../common/directives/important-text.directive';
import {Uppercase} from '../../common/directives/uppercase.directive';
import {Logger} from '../../common/directives/logger.directive';
import {SubmitButton} from '../../common/components/submit_button';

type ITodoList = {
    message: string;
    id: number;
}

@Component({
    selector: 'todo',
    viewBindings: [FormBuilder, TodoService]
})
@View({
    templateUrl: 'todo/components/todo.html',
    styleUrls: ['todo/components/todo.css'],
    directives: [NgFor, formDirectives, ImportantText, Uppercase, Logger, SubmitButton]
})
export class Todo {
    title: string = 'todo!';
    message: string;
    id: number;
    todoList: Array<ITodoList>;
    todoForm: ControlGroup;
    ts: TodoService;

    constructor(@Inject(FormBuilder) fb: FormBuilder, ts: TodoService) {

        this.message = '';
        this.id = 0;
        this.todoList = [];
        this.ts = ts;

        this.todoForm = fb.group({
            "message": ["something todo soon...", Validators.required]
        });
    }

    add(info:{value:string}) {
        this
            .ts
            .add(info.value)
            .subscribe(r => this.todoList.push({message: r, id: Date.now()}));

    }

    remove(id:number) {
        this
            .ts
            .remove(id)
            .subscribe(_ => {
                this.todoList.forEach((t, i) => {
                    if (t.id === id)
                        this.todoList.splice(i, 1);
                });
            });
    }
}
