import { Component, OnInit } from '@angular/core';

import { User } from './shared/models/user';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>

    <div *ngIf="users">
      <div *ngFor="let user of users">{{ user.first_name }}</div>
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