import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {

  constructor(
    public _loginService: LoginService,
    public router: Router) {

  }
  canActivate() {

    if (this._loginService.isLogin()) {
      //this.router.navigate(['/dashboard']);
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

}
