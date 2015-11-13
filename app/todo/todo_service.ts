import * as Rx from '@reactivex/rxjs/dist/cjs/Rx';
import {TodoModel} from 'app/todo/todo_model.js';

export class TodoService {
    add(todo: TodoModel):Rx.Observable<any> {
      return Rx.Observable.create((o) => {
        o.next(todo);
      });
    }

    remove(id: number):Rx.Observable<any> {
      return Rx.Observable.create((o) => {
        o.next(id);
      });
    }
}
