export class TodoModel {
    message: string;
    createdAt: number;

    constructor(message) {
        this.message = message;
        this.createdAt = Date.now();
    }
}