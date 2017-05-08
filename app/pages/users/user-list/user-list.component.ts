import { Component, OnInit } from '@angular/core';

import { UserService } from './../../../shared/services/user.service';
import { User } from './../../../shared/models/user';

@Component({
    selector: 'UserList-app',
    styles: [`
        .list{
            cursor: pointer;
        }
    `],
    templateUrl: './app/pages/users/user-list/user-list.component.html'
})

export class UserListComponent implements OnInit{
    private userlists: User[];

    constructor(private userservice: UserService){}

    ngOnInit(){
        this.userservice.getUsersMsg()
            .subscribe(data => {
                this.userlists = data;
            })
    }
}