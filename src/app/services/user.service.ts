import { Injectable } from '@angular/core';
import { User } from '../models/user.type';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  USER_DATA: User[] = [];

  constructor(private _httpClient: HttpClient) {
    this.getAllUsers();
  }

  getAllUsers() {
    let URL = URL_SERVICES + '/users';
    return this._httpClient.get(URL);
  }


  newUser(user: User) {
    this.USER_DATA.push(user);
  }




}
