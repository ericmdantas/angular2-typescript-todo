import {Injectable} from '@angular/core';

@Injectable()
export class TodoModel {
    message: string = '';
    createdAt: number = Date.now();

    constructor(message = '') {
        this.message = message;
    }
}
