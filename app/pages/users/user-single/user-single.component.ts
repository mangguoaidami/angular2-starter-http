import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from './../../../shared/services/user.service';
import { User } from './../../../shared/models/user';

@Component({
    templateUrl: './app/pages/users/user-single/user-single.component.html'
})
export class UserSingleComponent implements OnInit {
    private userSingle: User;
    
    constructor(private userservice: UserService, private route: ActivatedRoute) {};
    
    ngOnInit(){
        // grab the id from the url
        let id = this.route.snapshot.params['id'];

        // use the userservice to getUser()
        this.userservice.getSingleUserMsg(id)
            .subscribe(user => {
                // this.userSingle = user;
                console.log(user);
            });
  
    }
}