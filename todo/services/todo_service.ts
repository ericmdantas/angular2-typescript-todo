/// <reference path="../../typings/angular2/angular2.d.ts" />

import {EventEmitter} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import * as Rx from 'rx';

export class TodoService {
    addTodo: EventEmitter;
    removeTodo: EventEmitter;

    constructor() {
        this.addTodo = new EventEmitter();
        this.removeTodo = new EventEmitter();
    }

    add(value: string):Rx.Observable {
        return Rx.Observable.create(o => {
           o.onNext(value);
           o.onCompleted();
        });
    }

    remove(id: number):Rx.Observable {
        return Rx.Observable.create(o => {
           o.onNext();
           o.onCompleted;
        });
    }
}