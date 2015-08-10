/// <reference path="../../typings/tsd.d.ts" />

import {EventEmitter} from 'angular2/angular2';
import {TodoModel} from 'app/todo/todo_model.js';
import * as Rx from 'rx';

export class TodoService {
    add(todo: TodoModel):Rx.Observable {
        return Rx.Observable.create(o => {
            o.onNext(todo);
            o.onCompleted();
        });
    }

    remove(id: number):Rx.Observable {
        return Rx.Observable.create(o => {
            o.onNext(id);
            o.onCompleted();
        });
    }
}