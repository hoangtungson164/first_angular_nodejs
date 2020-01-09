import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthLoginInfo } from '../jwt/auth-login-info';
let LoginComponent = class LoginComponent {
    constructor(authService, tokenStorage, route, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.route = route;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.loginForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl('')
        });
        this.isNotLogin = 'Wrong email or password !!!';
        this.display = false;
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/login';
        // if (this.tokenStorage.getToken()) {
        //   this.isLoggedIn = true;
        //   // this.roles = this.tokenStorage.getAuthorities();
        //   console.log(this.isLoggedIn);
        // }
        // this.form = {
        //   id: this.tokenStorage.getId(),
        //   email: this.tokenStorage.getEmail(),
        //   name: this.tokenStorage.getUsername(),
        //   token: this.tokenStorage.getToken(),
        // };
    }
    onSubmit() {
        const { email, password } = this.loginForm.value;
        const loginFormAuth = new AuthLoginInfo(email, password);
        this.authService.attemptAuth(loginFormAuth).subscribe(data => {
            this.tokenStorage.saveId(data.id);
            this.tokenStorage.saveEmail(data.email);
            this.tokenStorage.saveUsername(data.name);
            this.tokenStorage.saveToken(data.accessToken);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.router.navigate(['/items/']).then(r => console.log('success to navigate'));
        }, error => {
            console.log(error);
            this.errorMessage = error.error.message;
            this.isLoginFailed = true;
            this.display = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map