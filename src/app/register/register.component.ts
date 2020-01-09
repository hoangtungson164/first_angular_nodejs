import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpInfo } from '../jwt/sign-up-info';
import { AuthService } from '../jwt/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cpassword: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  successSignUp = false;

  isNotSignUp = 'Wrong username or password !!!';
  displaySignUp = false;

  message = 'The passwords do not match';
  displayMessage = false;

  constructor(
    private authService: AuthService,
    private router: Router) {
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

    const {name, email, password, cpassword} = this.form.value;
    this.signupInfo = new SignUpInfo(name, email, password);

    if (password === cpassword) {
      this.authService.signUp(this.signupInfo).subscribe(
        data => {
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          this.successSignUp = true;
          this.router.navigate(['/login']).then(r =>
            console.log(data)
          );
        },
        error => {
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
          this.displaySignUp = true;
        }
      );
    } else {
      this.displayMessage = true;
    }


  }

}
