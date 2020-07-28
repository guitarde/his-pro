import { Injectable } from '@angular/core';
import { User } from '../models/user.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
 

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
    const URL = environment.URL_SERVICES + '/users';
    return this._httpClient.get(URL);
  }

  /**
   * Create a new User by type Professional or Patient
   * @param user data
   */
  newUser(user: User) {
    const URL = environment.URL_SERVICES + '/users';
    return this._httpClient.post(URL, user);
  }

  /**
   * Delete a users profesional or patient
   * @param id key of a register
   */
  public deleteUser(id: number) {
    const URL = environment.URL_SERVICES + '/users/' + id;
    return this._httpClient.delete(URL);
  }

  /**
   * Editting a user.
   * @param user data
   */
  editUser(user: User) {
    const URL = environment.URL_SERVICES + '/users/' + user._id;
    return this._httpClient.put(URL, user);
  }

  /**
   * Find users by Id property
   * @param id of users
   */
  getUserById(id: number) {
    const URL = environment.URL_SERVICES + '/users/' + id;
    return this._httpClient.get(URL);
  }

  deleteAllDoctors() {

    const URL = environment.URL_SERVICES + '/users/doctors/del';
    return  this._httpClient.delete(URL);

    // return this.getAllUsers().toPromise().then((usersWithoutDoctor: User[]) => {
    //   return usersWithoutDoctor.filter(prof => prof.professional?.professionalType !== 'DOCTOR');
    // });

  }
}
