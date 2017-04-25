import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

@Injectable()
export class UserService {
    private getUserUrl: string = 'https://reqres.in/api/users?page=2';
    
    constructor(private http: Http) {}
    //grab user message
    getusermsg(): Observable<User[]>{
        return this.http.get(this.getUserUrl)
        .map(response => response.json().data);
        //.find((user, key) => user.fisrst_name === 'eve')       //筛选数据
        // .subscribe(data => {                                      //订阅实现ajax数据调取
        //   console.log(data);
        //   this.users = data;
        // })
        // .toPromise()                                           //实现函数异步处理
        // .then(data => {
        //   console.log(data.json().data);
        // })
    }
}