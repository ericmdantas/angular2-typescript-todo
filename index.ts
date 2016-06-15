import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {TodoCmp} from './app/app';

bootstrap(TodoCmp, [
  disableDeprecatedForms(),
  provideForms()
]);
