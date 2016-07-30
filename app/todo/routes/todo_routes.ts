import {
  provideRouter,
  RouterConfig
} from '@angular/router';

import {
    TodoCmp
} from '../components/todo_cmp';

const routes:RouterConfig = [
    {
        path: '',
        pathMatch: 'full',
        component: TodoCmp
    }
];

export const TODO_ROUTES_PROVIDERS = [
    provideRouter(routes)
];
