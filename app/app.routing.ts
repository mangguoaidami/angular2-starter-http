import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './pages/users/users.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserSingleComponent } from './pages/users/user-single/user-single.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UserListComponent
            },
            {
                path: ':id',
                component: UserSingleComponent
            },
            {
                path: ':id/edit',
                component: UserEditComponent
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);