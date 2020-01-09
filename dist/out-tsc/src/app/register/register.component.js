import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpInfo } from '../jwt/sign-up-info';
let RegisterComponent = class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(3)]),
            cpassword: new FormControl('', [Validators.required, Validators.minLength(3)])
        });
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
        this.successSignUp = false;
        this.isNotSignUp = 'Wrong username or password !!!';
        this.displaySignUp = false;
        this.message = 'The passwords do not match';
        this.displayMessage = false;
    }
    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(3)]),
            cpassword: new FormControl('', [Validators.required, Validators.minLength(3)])
        });
    }
    onSubmit() {
        const { name, email, password, cpassword } = this.form.value;
        this.signupInfo = new SignUpInfo(name, email, password);
        if (password === cpassword) {
            this.authService.signUp(this.signupInfo).subscribe(data => {
                this.isSignedUp = true;
                this.isSignUpFailed = false;
                this.successSignUp = true;
                this.router.navigate(['/login']).then(r => console.log(data));
            }, error => {
                this.errorMessage = error.error.message;
                this.isSignUpFailed = true;
                this.displaySignUp = true;
            });
        }
        else {
            this.displayMessage = true;
        }
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map