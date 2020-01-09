
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Permissions } from './permission';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private permission: Permissions,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if (this.permission.canActivate()) {
      return this.permission.canActivate();
    } else {
      this.router.navigateByUrl('/login').then(r => console.log('Need to login'));
      return false;
    }
  }

}