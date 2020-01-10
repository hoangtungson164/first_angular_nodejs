import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/jwt/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/jwt/token.service';

@Component({
  selector: 'app-login-taskbar',
  templateUrl: './login-taskbar.component.html',
  styleUrls: ['./login-taskbar.component.css']
})
export class LoginTaskbarComponent implements OnInit {

  checkToken: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenStorageService,
    ) { }

  ngOnInit() {
    this.checkToken = this.tokenService.getToken();
  }

  logout(){
    this.authService.signOut().subscribe( next => {
      this.tokenService.signOut();
      this.router.navigateByUrl("/").then(s => {console.log('success to logout');})
    }, error => {
      console.log('fail to logout')
    })
  }

}
