export class TodoModel {
    message: string = '';
    createdAt: number = Date.now();

    constructor(message = '') {
        this.message = message;
    }
}
