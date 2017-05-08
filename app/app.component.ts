import { Component, OnInit } from '@angular/core';

import { User } from './shared/models/user';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'my-app',
  template: `
    
    <div class="container">
      <h1>My HTTP App</h1>
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
          <a routerLink="/" class="navbar-brand">my Brand</a>
          <ul class="nav navbar-nav">
            <li>
              <a routerLink="/users">Users</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  private users: User[];
  private message: string;

  constructor (private userservice: UserService) {}

  ngOnInit(){}
}