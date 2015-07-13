/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Logger} from '../directives/logger.directive';

@Component({
    selector: 'submit-button',
    properties: ['submitForm']
})
@View({
    template: `
        <button type="button"
                logger
                [disabled]="!submitForm.valid">+</button>
    `,
    directives: [Logger]
})

export class SubmitButton {

}
