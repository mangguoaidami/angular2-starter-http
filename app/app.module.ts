import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserSingleComponent } from './pages/users/user-single/user-single.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import { UserService } from './shared/services/user.service';
import { routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, UsersComponent, UserListComponent, UserSingleComponent, UserEditComponent ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}