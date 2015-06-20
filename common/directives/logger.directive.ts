/// <reference path="../../typings/tsd.d.ts" />

import {ElementRef, Directive} from 'angular2/angular2';
import {Inject} from 'angular2/di';

@Directive({
    selector: '[logger]',
    host: {
        '(click)': 'log()',
        '(keyup.enter)': 'log()'
    }
})
export class Logger {
    log() {
        console.log(`I log stuff! It's ${new Date()}`);
    }
}