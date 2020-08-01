import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { UserLogin } from '../models/user-login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient: HttpClient) { }

  token: string;

  userLogin: UserLogin;

  isLogin() {
    return this.token.length > 4 ? true : false;
  }

  login(user: UserLogin) {

    const URL = environment.URL_SERVICES + '/auth/login';
    return this._httpClient.post(URL, user)
      .pipe(map((resp: any) => {
        this.guardarStorage(resp.token, resp.user);
        return true;
      }));

  }

  guardarStorage(token: string, user: UserLogin) {

    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(user));

    this.userLogin = user;
    this.token = token;
  }
}
