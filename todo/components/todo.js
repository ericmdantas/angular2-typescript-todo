/// <reference path="../../typings/tsd.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var forms_1 = require('angular2/forms');
var todo_service_1 = require('../services/todo.service');
var di_1 = require('angular2/di');
var directives_1 = require('angular2/directives');
var important_text_directive_1 = require('../../common/directives/important-text.directive');
var uppercase_directive_1 = require('../../common/directives/uppercase.directive');
var logger_directive_1 = require('../../common/directives/logger.directive');
var Todo = (function () {
    function Todo(fb, ts) {
        this.title = 'todo!';
        this.message = '';
        this.id = 0;
        this.todoList = [];
        this.ts = ts;
        this.todoForm = fb.group({
            "message": ["something todo soon...", forms_1.Validators.required]
        });
    }
    Todo.prototype.add = function (info) {
        var _this = this;
        this
            .ts
            .add(info.value)
            .then(function (r) { return _this.todoList.push({ message: r, id: Date.now() }); });
    };
    Todo.prototype.remove = function (id) {
        var _this = this;
        this
            .ts
            .remove(id)
            .then(function (_) {
            _this.todoList.forEach(function (t, i) {
                if (t.id === id)
                    _this.todoList.splice(1, i);
            });
        });
    };
    Todo = __decorate([
        angular2_1.Component({
            selector: 'todo',
            appInjector: [forms_1.FormBuilder, todo_service_1.TodoService]
        }),
        angular2_1.View({
            templateUrl: 'todo/components/todo.html',
            directives: [directives_1.NgFor, forms_1.formDirectives, important_text_directive_1.ImportantText, uppercase_directive_1.Uppercase, logger_directive_1.Logger]
        }),
        __param(0, di_1.Inject(forms_1.FormBuilder)), 
        __metadata('design:paramtypes', [(typeof FormBuilder !== 'undefined' && FormBuilder) || Object, todo_service_1.TodoService])
    ], Todo);
    return Todo;
})();
exports.Todo = Todo;
