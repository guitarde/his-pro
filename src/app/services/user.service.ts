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

  /**
   * Retrieve all users.
   */
  getAllUsers() {
    const URL = URL_SERVICES + '/users';
    return this._httpClient.get(URL);
  }

  /**
   * Create a new User by type Professional or Patient
   * @param user data
   */
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

  /**
   * Editting a user.
   * @param user data
   */
  editUser(user: User) {
    const URL = URL_SERVICES + '/users/' + user.id;
    return this._httpClient.put(URL, user);
  }

  /**
   * Find users by Id property
   * @param id of users
   */
  getUserById(id: number) {
    const URL = URL_SERVICES + '/users/' + id;
    return this._httpClient.get(URL);
  }

  deleteAllDoctors() {

    return this.getAllUsers().toPromise().then((usersWithoutDoctor: User[]) => {
      return usersWithoutDoctor.filter(prof => prof.professional?.professionalType !== 'DOCTOR');
    });

  }
}
