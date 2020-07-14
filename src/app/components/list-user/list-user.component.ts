import { Component, OnInit, ViewChild } from '@angular/core';


import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.type';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'name', 'surName', 'lastName', 'genero', 'birthDate', 'identification', 'typeUser', 'options'];

  dataSource = new MatTableDataSource<User>();


  value = '';
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this._userService.getAllUsers()
      .subscribe((resp: any) => this.dataSource.data = resp);
  }

  typeUserColor(user: User) {
    return typeof user.patient === 'object' ? 'accent' : 'primary';
  }


  /**
   * check it if a Man or Woman
   * @param genero of a User
   */
  generoUserColor(genero: string) {
    return genero === 'H' ? 'accent' : 'primary';
  }


  /**
   * check it if a Patient or Professional
   * @param user each user values
   */

  evaluteTypeUser(user: User) {

    return typeof user.patient === 'object' ? 'Patient' : 'Profesional';
  }


  addUser() {
    this._router.navigate(['/users/new']);
    console.log("Creando nuevo usuario");
  }

  findUser(criteria: string) {
    console.log(criteria);
  }

  showUser(user: User) {
    this._router.navigate([`/users/${user._id}`]);

  }

  deleteUser(user: User) {
    console.log(user);

  }

  editUser(user: User) {

    this._router.navigate([`/users/${user._id}/edit`]);
  }
}
