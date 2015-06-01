/// <reference path="../../typings/angular2/angular2.d.ts" />

import {ElementRef, Directive} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Directive({
    selector: '[important-text]'
})

export class ImportantText {
    el: ElementRef;

    constructor(@Inject(ElementRef) el: ElementRef) {
        setTimeout( _ => el.domElement.style.color = 'red', 1234);
    }
}
