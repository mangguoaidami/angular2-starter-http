import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
  
  constructor(private http: Http){}

  ngOnInit() {
    this.message = 'This is the sample message.';
    this.http.get('https://reqres.in/api/users?page=2')
        .subscribe(res => {
          console.log(res.json().data);
          this.users = res.json().data;
        })
        
  }
}