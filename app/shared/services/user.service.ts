import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from './../models/user';

@Injectable()
export class UserService {
    constructor (private http: Http) {}

    getUsersMsg(): Observable<User[]>{
        return this.http.get('https://reqres.in/api/users?page=2')
                    .map(data => data.json().data);
    }
}