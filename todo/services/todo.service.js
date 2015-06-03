/// <reference path="../../typings/angular2/angular2.d.ts" />
var async_1 = require('angular2/src/facade/async');
var TodoService = (function () {
    function TodoService() {
    }
    TodoService.prototype.add = function (value) {
        return new async_1.Promise(function (res, rej) { return res(value); });
    };
    TodoService.prototype.remove = function (id) {
        return new async_1.Promise(function (res, rej) { return res(id); });
    };
    return TodoService;
})();
exports.TodoService = TodoService;
