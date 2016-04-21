/// <reference path="../typings/main.d.ts" />

import {
  describe,
  xdescribe,
  it,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

import {
  provide
} from 'angular2/core';

import {Observable} from 'rxjs/Observable';
import {TodoCmp} from '../app/todo/todo_cmp';
import {TodoService} from '../app/todo/todo_service';
import {TodoModel} from '../app/todo/todo_model';

class MockTodoService {
  add() {
    return new Observable((o) => {
      o.next(1);
    });
  }

  remove() {
    return new Observable((o) => {
      o.next(2);
    });
  }
}

describe('todo_cmp', () => {
  describe('creation', () => {
    it('should create the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled).toBeDefined();
      });
    }));

    it('should have todoList as an empty array', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        expect(instance.todoList).toEqual([]);
      });
    }));

    it('should have _todoService an instance of TodoService', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        expect(instance._todoService).toBeDefined();
      });
    }));
  });

  describe('methods', () => {
    describe('customTrackBy', () => {
      it('should return the createdAt correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TodoCmp).then((fixture) => {
          fixture.detectChanges();

          let instance = fixture.debugElement.componentInstance;
          let todo = new TodoModel('abc');
          let index = 0;

          let resultCustomCall = instance.customTrackBy(index, todo);

          expect(resultCustomCall).toBeDefined();
          expect(resultCustomCall).toBe(todo.createdAt);
        });
      }));
    })

    describe('add', () => {
      it('should do the right stuff', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.overrideProviders(TodoCmp, [provide(TodoService, {useClass: MockTodoService})]).createAsync(TodoCmp).then((fixture) => {
          fixture.detectChanges();

          let instance = fixture.debugElement.componentInstance;

          expect(instance.todoList.length).toBe(0);

          instance.add(1);

          expect(instance.todoList.length).toBe(1);
        });
      }));
    })

    describe('remove', () => {
      it('should do the right stuff', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.overrideProviders(TodoCmp, [provide(TodoService, {useClass: MockTodoService})]).createAsync(TodoCmp).then((fixture) => {
          fixture.detectChanges();

          let instance = fixture.debugElement.componentInstance;

          instance.todoList = [{createdAt: 1}, {createdAt: 2}, {createdAt: 3}];

          instance.remove(2);

          expect(instance.todoList.length).toBe(2);

          expect(instance.todoList[0]).toEqual({createdAt: 1});
          expect(instance.todoList[1]).toEqual({createdAt: 3});
          expect(instance.todoList[2]).toBeUndefined();
        });
      }))
    })
  });

  describe('form stuff', () => {
    it('should have the submit button disabled on creation', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled.getElementsByClassName('todo_button')[0].getAttribute('disabled')).not.toBe(null);
        expect(compiled.getElementsByClassName('todo_button')[0].getAttribute('disabled')).toBeDefined();
      });
    }));

    it('should have the submit button enabled after form changes', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;
        let compiled = fixture.debugElement.nativeElement;

        instance.todoForm.controls.message.updateValue('abc');

        fixture.detectChanges();

        expect(compiled.getElementsByClassName('todo_button')[0].getAttribute('disabled')).toBe(null);

        instance.todoForm.controls.message.updateValue(undefined);

        fixture.detectChanges();

        expect(compiled.getElementsByClassName('todo_button')[0].getAttribute('disabled')).not.toBe(null);
      });
    }));

    it('should clear the input after the submit', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TodoCmp).then((fixture) => {
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;
        let instance = fixture.debugElement.componentInstance;

        const TEXT = 'something something';

        instance.todoForm.controls.message.updateValue(TEXT);

        fixture.detectChanges();

        expect(compiled.getElementsByClassName('todo_button')[0].getAttribute('disabled')).toBe(null);
        expect(instance.todoForm.controls.message.value).toBe(TEXT);

        compiled.getElementsByClassName('todo_button')[0].click();

        expect(instance.todoForm.controls.message.value).toBe('');
      });
    }));
  })
});
