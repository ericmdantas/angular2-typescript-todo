/// <reference path="../../typings/index.d.ts" />

import {
  async,
  inject,
  TestBed
} from '@angular/core/testing';

import {Observable} from 'rxjs/Observable';
import {TodoCmp} from '../../app/todo/components/todo_cmp';
import {TodoService} from '../../app/todo/services/todo_service';
import {TodoModel} from '../../app/todo/models/todo_model';

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
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCmp]
    })
  });

  describe('creation', () => {
    it('should create the cmp correctly', async(() => {
      let fixture = TestBed.createComponent(TodoCmp);
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled).toBeDefined();
    }));

    it('should have todoList as an empty array', async(() => {
      let fixture = TestBed.createComponent(TodoCmp);
      fixture.detectChanges();

      let instance = fixture.debugElement.componentInstance;

      expect(instance.todoList).toEqual([]);
    }));

    it('should have _todoService an instance of TodoService', async(() => {
      let fixture = TestBed.createComponent(TodoCmp);
      fixture.detectChanges();

      let instance = fixture.debugElement.componentInstance;

      expect(instance._todoService).toBeDefined();
    }));
  });

  describe('methods', () => {
    describe('customTrackBy', () => {
      it('should return the createdAt correctly', async(() => {
        let fixture = TestBed.createComponent(TodoCmp);
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;
        let todo = new TodoModel('abc');
        let index = 0;

        let resultCustomCall = instance.customTrackBy(index, todo);

        expect(resultCustomCall).toBeDefined();
        expect(resultCustomCall).toBe(todo.createdAt);
      }));
    })

  });

  describe('form stuff', () => {
    it('should have the submit button disabled on creation', async(() => {
      let fixture = TestBed.createComponent(TodoCmp);
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled.getElementsByClassName('todo_button')[0].getAttribute('disabled')).not.toBe(null);
      expect(compiled.getElementsByClassName('todo_button')[0].getAttribute('disabled')).toBeDefined();
    }));

    it('should have the submit button enabled after form changes', async(() => {
      let fixture = TestBed.createComponent(TodoCmp);
      fixture.detectChanges();

      let instance = fixture.debugElement.componentInstance;
      let compiled = fixture.debugElement.nativeElement;

      instance.todoForm.controls.message.updateValue('abc');

      fixture.detectChanges();

      expect(compiled.getElementsByClassName('todo_button')[0].getAttribute('disabled')).toBe(null);

      instance.todoForm.controls.message.updateValue(undefined);

      fixture.detectChanges();

      expect(compiled.getElementsByClassName('todo_button')[0].getAttribute('disabled')).not.toBe(null);
    }));

    it('should clear the input after the submit', async(() => {
      let fixture = TestBed.createComponent(TodoCmp);
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
    }));
  })
});
