/// <reference path="../../typings/tsd.d.ts" />

import {EventEmitter} from 'angular2/angular2';
import {TodoModel} from 'app/todo/todo_model.js';

export class TodoService {
    add(todo: TodoModel):EventEmitter {
        let _ee = new EventEmitter();
        setTimeout(() => _ee.next(todo));

        return _ee._subject;
    }

    remove(id: number):EventEmitter {
        let _ee = new EventEmitter();
        setTimeout(() => _ee.next(id));

        return _ee.toRx();
    }
}
