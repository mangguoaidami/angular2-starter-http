import { Component, OnInit } from '@angular/core';

import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user';
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
  `
})
export class AppComponent implements OnInit {
  public users: User[];
  public message: string;
  
  constructor(private userservice: UserService){}

  ngOnInit() {
    this.message = 'This is the sample message.';
    this.userservice.getusermsg()
      .subscribe(res => {
        //console.log(res);
        this.users = res;
      })
  }
}