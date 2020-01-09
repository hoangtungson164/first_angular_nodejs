import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
const TOKEN_KEY = 'accessToken';
const USERNAME_KEY = 'name';
const AUTHORITIES_KEY = 'AuthAuthorities';
const EMAIL_KEY = 'email';
const USERID_KEY = 'id';
let TokenStorageService = class TokenStorageService {
    constructor() {
        this.roles = [];
    }
    signOut() {
        window.sessionStorage.clear();
    }
    saveId(id) {
        window.sessionStorage.removeItem(USERID_KEY);
        window.sessionStorage.setItem(USERID_KEY, id);
    }
    getId() {
        return sessionStorage.getItem(USERID_KEY);
    }
    saveEmail(email) {
        window.sessionStorage.removeItem(EMAIL_KEY);
        window.sessionStorage.setItem(EMAIL_KEY, email);
    }
    getEmail() {
        return sessionStorage.getItem(EMAIL_KEY);
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUsername(name) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, name);
    }
    getUsername() {
        return sessionStorage.getItem(USERNAME_KEY);
    }
    saveAuthorities(authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }
    getAuthorities() {
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
                this.roles.push(authority.authority);
            });
        }
        return this.roles;
    }
};
TokenStorageService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TokenStorageService);
export { TokenStorageService };
//# sourceMappingURL=token.service.js.map