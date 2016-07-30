import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {App} from './app/app';
import {TODO_ROUTES_PROVIDERS} from './app/todo/routes/todo_routes';

bootstrap(App, [
  disableDeprecatedForms(),
  provideForms(),
  TODO_ROUTES_PROVIDERS
]);
