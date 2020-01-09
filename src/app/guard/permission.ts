import {Injectable} from '@angular/core';
import { TokenStorageService } from '../jwt/token.service';

const TOKEN_KEY = 'AuthToken';

@Injectable()
export class Permissions {
  constructor(private token: TokenStorageService) {}

  canActivate(): boolean {
    return !!this.token.getToken();
  }
}