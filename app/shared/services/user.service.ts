import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { User } from './../models/user';

@Injectable()
export class UserService {
    constructor(private http: Http){}

    private apiUrl: string = 'https://reqres.in/api/users';

    /**
     * Get all users
     */
    getUsersMsg(): Observable<User[]>{
        return this.http.get(this.apiUrl + '?page=2')
            .map(data => data.json().data)
            .catch(this.handleError);
    }
    /**
     * Get single user
     */
    getSingleUserMsg(id: number): Observable<User>{
        return this.http.get(`${this.apiUrl}/${id}`)
            .map(data => data.json().data)
            .catch(this.handleError);
    }
    /**
     * Hangle any errors from AIP
     */
    private handleError(err) {
        let errMessage: string;
        
        if(err instanceof Response) {
            let body = err.json() || '';
            let error = body || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
        }else{
            errMessage = err.message ? err.message : err.toString();
        }

        return Observable.throw(errMessage);
    }
}