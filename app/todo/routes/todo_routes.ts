import {
  Routes,
  RouterModule
} from '@angular/router';

import {
    TodoCmp
} from '../components/todo_cmp';

const routes:Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: TodoCmp
    }
];

export const todoRouting = RouterModule.forRoot(routes);
