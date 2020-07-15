import { Injectable } from '@angular/core';
import { User } from '../models/user.type';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) {
    this.getAllUsers();
  }

  getAllUsers() {
    const URL = URL_SERVICES + '/users';
    return this._httpClient.get(URL);
  }


  newUser(user: User) {
    const URL = URL_SERVICES + '/users';
    return this._httpClient.post(URL, user);
  }

  /**
   * Delete a users profesional or patient
   * @param id key of a register
   */
  public deleteUser(id: number) {
    const URL = URL_SERVICES + '/users/' + id;
    return this._httpClient.delete(URL);
  }


  editUser(user: User) {
    const URL = URL_SERVICES + '/users/' + user.id;
    return this._httpClient.put(URL, user);
  }


}
