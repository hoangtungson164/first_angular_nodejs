import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthLoginInfo } from '../jwt/auth-login-info';
import { AuthService } from '../jwt/auth.service';
import { TokenStorageService } from '../jwt/token.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  returnUrl: string;
  roles: string[] = [];
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  isNotLogin = 'Wrong email or password !!!';
  display = false;


  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const {email, password} = this.loginForm.value;

    const loginFormAuth = new AuthLoginInfo(email, password);

    this.authService.attemptAuth(loginFormAuth).subscribe(
      data => {
        console.log(data.accessToken);
        this.tokenStorage.saveId(data.id);
        this.tokenStorage.saveEmail(data.email);
        this.tokenStorage.saveUsername(data.name);
        this.tokenStorage.saveToken(data.accessToken)
        console.log(this.tokenStorage.getToken());

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(this.tokenStorage.getToken());
        this.router.navigate(['/items/']).then(r => console.log('success to navigate'));
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.display = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
