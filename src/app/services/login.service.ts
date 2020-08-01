import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { UserLogin } from '../models/user-login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;
  userLogin: UserLogin;

  constructor(private _httpClient: HttpClient) {

    this.loadStorage();
  }


  isLogin() {
    return this.token.length > 4 ? true : false;
  }

  login(user: UserLogin) {

    const URL = environment.URL_SERVICES + '/auth/login';
    return this._httpClient.post(URL, user)
      .pipe(map((resp: any) => {
        this.saveStorage(resp.token);
        return true;
      }));

  }


  loadStorage() {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

  saveStorage(token: string) {

    localStorage.setItem('token', token);
    this.token = token;

  }

  logout() {
    this.token = '';
    localStorage.removeItem('token');
  }
}
