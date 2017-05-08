import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from './../../../shared/models/user';
import { UserService } from './../../../shared/services/user.service';

@Component({
    templateUrl: './app/pages/users/user-edit/user-edit.component.html'
})

export class UserEditComponent implements OnInit{
    private user: User;

    constructor(private userservice: UserService, private route: ActivatedRoute){}

    ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.userservice.getSingleUserMsg(id)
            .subscribe(data => this.user = data)
    }

    updateUser(){
        this.userservice.updateUser(this.user);
        console.log(this.user)
    }
}