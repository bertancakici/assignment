import {Routes} from '@angular/router';

/* Components */
import {UsersComponent} from './users/users.component';
import {NewComponent} from './new/new.component';
import {DetailComponent} from './detail/detail.component';
import {DeleteComponent} from './delete/delete.component';
import {UpdateComponent} from './update/update.component';


export const appRoutes: Routes = [
    {
        path: '', redirectTo: '/users', pathMatch: 'full'
    },
    {
        path: 'users', component: UsersComponent
    },
    {
        path: 'users/new', component: NewComponent
    },
    {
        path: 'users/detail/:id', component: DetailComponent
    },
    {
        path: 'users/delete/:id', component: DeleteComponent
    },
    {
        path: 'users/update/:id', component: UpdateComponent
    }
];