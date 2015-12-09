import {
  Observable
} from 'angular2/core';

import {TodoModel} from './todo_model';

export class TodoService {
    add(todo: TodoModel):Observable<any> {
      return new Observable((o) => {
        o.next(todo);
      });
    }

    remove(id: number):Observable<any> {
      return new Observable((o) => {
        o.next(id);
      });
    }
}
