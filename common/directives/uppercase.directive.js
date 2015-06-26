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
var angular2_2 = require('angular2/angular2');
var Uppercase = (function () {
    function Uppercase(el) {
        el.nativeElement.style.textTransform = 'uppercase';
    }
    Uppercase = __decorate([
        angular2_1.Directive({
            selector: '[uppercase]'
        }),
        __param(0, angular2_2.Inject(angular2_1.ElementRef)), 
        __metadata('design:paramtypes', [(typeof ElementRef !== 'undefined' && ElementRef) || Object])
    ], Uppercase);
    return Uppercase;
})();
exports.Uppercase = Uppercase;
