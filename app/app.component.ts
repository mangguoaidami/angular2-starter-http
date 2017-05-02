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
          <ul class="nav navbar-nav">
            <li>
              <a routerLink="/">Users</a>
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

  ngOnInit(){
    this.message = 'This is the sample message.';
    this.userservice.getUsersMsg()
        .subscribe(data => {
          this.users = data;
          // console.log(data);
        })
    this.userservice.getSingleUserMsg()
        .subscribe(data => {
          console.log(data)
        })
  }
}