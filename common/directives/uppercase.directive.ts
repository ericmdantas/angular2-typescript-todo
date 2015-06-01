/// <reference path="../../typings/angular2/angular2.d.ts" />

import {ElementRef, Directive} from 'angular2/angular2';
import {Inject} from 'angular2/angular2';

@Directive({
    selector: '[uppercase]'
})

export class Uppercase {
    el: ElementRef;

    constructor(@Inject(ElementRef) el: ElementRef) {
        el.domElement.style.textTransform = 'uppercase';
    }
}
