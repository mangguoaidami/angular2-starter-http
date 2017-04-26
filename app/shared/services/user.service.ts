import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from './../models/user';

@Injectable()
export class UserService {
    private usersMsgUrl: string = 'https://reqres.in/api/users?page=2';

    constructor (private http: Http) {}

    getUsersMsg(): Observable<User[]>{
        return this.http.get(this.usersMsgUrl)
                    .map(data => data.json().data)
                    .catch(this.handleError)
    }

    /**
     * Get a single user
     * 
     */
    getUserMsg(){
        return this.http.get('https://reqres.in/api/users/2')
            .map(res => res.json().data)
            .catch(this.handleError)
    }

    /**
     * handle any errors from the API
     */
    private handleError(err) {
        let errMessage: string;

        if (err instanceof Response) {
            let body = err.json() || '';
            // let error = body.error || JSON.stringify(body);
            let error = body || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
        }else{
            errMessage = err.message ? err.message: err.toString();
        }

        return Observable.throw(errMessage);
    }
}