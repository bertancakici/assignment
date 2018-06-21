import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {appRoutes} from './routes';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MenusComponent} from './menus/menus.component';
import {UsersComponent} from './users/users.component';
import {NewComponent} from './new/new.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
    declarations: [
        AppComponent,
        MenusComponent,
        UsersComponent,
        NewComponent,
        HeaderComponent,
        DetailComponent,
        DeleteComponent,
        UpdateComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
