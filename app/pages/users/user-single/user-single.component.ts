import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from './../../../shared/services/user.service';
import { User } from './../../../shared/models/user';

@Component({
    templateUrl: './app/pages/users/user-single/user-single.component.html'
})

export class UserSingleComponent implements OnInit{
    private user: User;

    constructor(private route: ActivatedRoute, private userservice: UserService) {}

    ngOnInit() {
        // grab the id from the URL
        let id = this.route.snapshot.params['id'];

        //use the userservice
        this.userservice.getSingleUserMsg(id)
            .subscribe(data => {
                this.user = data;
            })
    }
}