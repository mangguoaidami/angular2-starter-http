"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'https://reqres.in/api/users';
    }
    /**
     * Get all users
     */
    UserService.prototype.getUsersMsg = function () {
        var _this = this;
        return this.http.get(this.apiUrl + '?page=2')
            .map(function (data) { return data.json().data; })
            .map(function (data) { return data.map(_this.toUserFormat); })
            .catch(this.handleError);
    };
    /**
     * Get single user
     */
    UserService.prototype.getSingleUserMsg = function (id) {
        return this.http.get(this.apiUrl + "/" + id)
            .map(function (data) { return data.json().data; })
            .map(this.toUserFormat)
            .catch(this.handleError);
    };
    /**
     * edit single message
     */
    UserService.prototype.updateuser = function (user) {
        return this.http.put(this.apiUrl + "/" + user.id, user)
            .map(function (date) { return date.json(); })
            .catch(this.handleError);
    };
    /**
     * Hangle any errors from AIP
     */
    UserService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof Response) {
            var body = err.json() || '';
            var error = body || JSON.stringify(body);
            errMessage = err.status + " - " + err.statusText + " || ''} " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable_1.Observable.throw(errMessage);
    };
    /**
     * change data format
     */
    UserService.prototype.toUserFormat = function (user) {
        return {
            id: user.id,
            name: user.first_name + " " + user.last_name,
            username: user.first_name,
            avatar: user.avatar
        };
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map