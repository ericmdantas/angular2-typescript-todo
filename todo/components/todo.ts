/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Validators, ControlGroup, FormBuilder, formDirectives} from 'angular2/forms';
import {Inject} from 'angular2/di';
import {NgFor} from 'angular2/directives';
import {ImportantText} from '../../common/directives/important-text.directive';
import {Uppercase} from '../../common/directives/uppercase.directive';
import {Logger} from '../../common/directives/logger.directive';

interface ITodoList {
    message: string;
    id: number;
}

@Component({
    selector: 'todo',
    appInjector: [FormBuilder]
})
@View({
    templateUrl: 'todo/components/todo.html',
    directives: [NgFor, formDirectives, ImportantText, Uppercase, Logger]
})
export class Todo {
    title: string = 'todo!';
    message: string;
    id: number;
    todoList: Array<ITodoList>;
    todoForm: ControlGroup;

    constructor() {

        var _fb = new FormBuilder();

        this.message = '';
        this.id = 0;
        this.todoList = [];

        this.todoForm = _fb.group({
            "message": ["something todo soon...", Validators.required]
        });
    }

    add(info:{value:string}) {
        this.todoList.push({message: info.value, id: Date.now()});
    }

    remove(id:number) {
        this.todoList.forEach((t, i) => {
            if (t.id === id)
                this.todoList.splice(1, i);
        });
    }
}
