/// <reference path="../../typings/index.d.ts" />

import {TodoModel} from '../../app/todo/models/todo_model';

describe('todo_model', () => {
  it('should have the right values - empty constructor', () => {
    spyOn(Date, 'now').and.returnValue(1);

    let _todo = new TodoModel();

    expect(_todo.message).toBe('');
    expect(_todo.createdAt).toBe(1);
  });

  it('should have the right values - filled constructor', () => {
    spyOn(Date, 'now').and.returnValue(1);

    let _todo = new TodoModel('a');

    expect(_todo.message).toBe('a');
    expect(_todo.createdAt).toBe(1);
  });
});
