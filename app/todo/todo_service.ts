import {
  Observable
} from 'angular2/angular2';

import {TodoModel} from './todo_model';

export class TodoService {
    add(todo: TodoModel):Observable<any> {
      return Observable.create((o) => {
        o.next(todo);
      });
    }

    remove(id: number):Observable<any> {
      return Observable.create((o) => {
        o.next(id);
      });
    }
}
