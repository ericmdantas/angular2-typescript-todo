/// <reference path="../typings/main.d.ts" />

import {
  describe,
  expect,
  beforeEachProviders,
  inject,
  it
} from 'angular2/testing';

import {TodoService} from '../app/todo/todo_service';
import {TodoModel} from '../app/todo/todo_model';

describe('todo_service', () => {
  beforeEachProviders(() => [TodoService]);

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
