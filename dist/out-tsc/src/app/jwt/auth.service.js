import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders } from '@angular/common/http';
const apiUrl = environment.apiUrl;
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.loginUrl = apiUrl + '/login';
        this.signupUrl = apiUrl + '/register';
    }
    attemptAuth(credentials) {
        return this.http.post(this.loginUrl, credentials, httpOptions);
    }
    signUp(info) {
        return this.http.post(this.signupUrl, info, httpOptions);
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map