import {
  Component,
  FormBuilder,
  Validators,
  ControlGroup,
  Control,
  Inject
} from 'angular2/angular2';

import {TodoModel} from './todo_model';
import {TodoService} from './todo_service';

@Component({
    selector: 'todo',
    templateUrl: 'app/todo/todo.html',
    styleUrls: ['app/todo/todo.css'],
    providers: [TodoService, FormBuilder]
})
export class TodoCmp {
    todo: TodoModel;
    todoForm: ControlGroup;
    todoList: TodoModel[] = [];

    constructor(@Inject(TodoService) private _todoService: TodoService,
                @Inject(FormBuilder) fb: FormBuilder) {

        this.todoForm = fb.group({
           "message": ["", Validators.required]
        });
    }

    add(message: string):void {
        this.todo = new TodoModel(message);

        this._todoService
            .add(this.todo)
            .subscribe(result => {
                this.todoList.push(result);
                (<Control>this.todoForm.controls['message']).updateValue("");
            });
    }

    remove(id: number):void {
        this._todoService
            .remove(id)
            .subscribe(id => {
                this.todoList.forEach((tl, index) => {
                    if (tl.createdAt === id) {
                        return this.todoList.splice(index, 1);
                    };
                });
            });
    }
}
