import { Component, OnInit } from '@angular/core';

import { UserService } from "./../../../shared/services/user.service";
import { User } from './../../../shared/models/user';

@Component({
    selector: 'userList-app',
    templateUrl: './app/pages/users/user-list/user-list.component.html'
})

export class UserListComponent implements OnInit{
    private users: User[];
    constructor(private userservice: UserService){}

    ngOnInit(){
        this.userservice.getUsersMsg()
            .subscribe(data => {
                this.users = data;
                console.log(data);
            })
    }
}