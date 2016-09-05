/// <reference path="../../typings/index.d.ts" />

import {
  inject
} from '@angular/core/testing';

import {TodoService} from '../../app/todo/services/todo_service';
import {TodoModel} from '../../app/todo/models/todo_model';

describe('todo_service', () => {
  describe('add', () => {
    it('should do something', inject([TodoService], (service) => {
      let _todo = new TodoModel();

      service.add(_todo)
             .subscribe((r) => {
               expect(r).toEqual(_todo);
             });
    }));
  });

  describe('remove', () => {
      it('should remove', inject([TodoService], (service) => {
        let _id = 1;

        service.remove(_id)
               .subscribe((r) => {
                 expect(r).toEqual(_id);
               });
      }))
  });
});
