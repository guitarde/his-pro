import { Component, OnInit, ViewChild } from '@angular/core';


import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.type';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ConfirmComponent } from '../dialog/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from '../dialog/message/message.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'surName', 'lastname', 'genero', 'birthDate', 'identification', 'typeUser', 'options'];

  dataSource = new MatTableDataSource<User>();
  valueFindUser = '';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private _userService: UserService, private _router: Router,
    private dialog: MatDialog) { }


  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.dataSource.paginator = this.paginator;
    this.requestAllUsers()
      .subscribe((resp: User[]) => this.dataSource.data = resp);
  }

  /**
   * Reauest to service to rertrieve all users
   */
  requestAllUsers() {
    return this._userService.getAllUsers();
  }

  typeUserColor(user: User) {
    return this.evaluteTypeUser(user) === 'Patient' ? 'accent' : 'primary';
  }


  /**
   * check it if a Man or Woman
   * @param genero of a User
   */
  generoUserColor(genero: string) {
    return genero === 'H' ? 'accent' : 'primary';
  }

  /**
   * Method to find a user by name or identification
   * @param criteria value to find
   */
  findUser(criteria: string) {

    if (criteria === '') {
      this.loadUsers();
      return;
    }

    const findUser = [];
    this.requestAllUsers()
      .subscribe((resp: User[]) => {
        resp.filter(data => {
          if (data.name.toLocaleLowerCase().includes(criteria.toLocaleLowerCase()) || data.identification === criteria) {
            findUser.push(data);
          }
        });
        this.dataSource.data = findUser;
      });
  }

  deleteUser(user: User) {

    this.showDialogConfirm(user);
  }


  showUser(user: User) {

    this._router.navigate([`/users/${user.id}`], { state: { user } });
  }

  editUser(user: User) {

    this._router.navigate([`/users/${user.id}/edit`], { state: { type: 'edit', user } });
  }

  /**
   * DIALOGS AND MESSAGE IMPLMENTS CALLS
   */
  showDialogConfirm(user: User): void {
    this.dialog
      .open(ConfirmComponent, {
        data: `Do you want to delete the user ${user.name}?`
      })
      .afterClosed()
      .subscribe((confirmado: boolean) => {
        if (confirmado) {
          this._userService.deleteUser(user.id).subscribe(resp => {
            this.messageDialog('User delete successfuly');
            this.loadUsers();
          });
        }
      });
  }

  messageDialog(message: string) {
    this.dialog.open(MessageComponent, {
      data: message
    });
  }
  /** ==================================== */

  /**
   * check it if a Patient or Professional
   * @param user each user values
   */
  evaluteTypeUser(user: User) {

    return 'patient' in user ? 'Patient' : user.professional.professionalType;
  }


  addUser() {
    this._router.navigate(['/users/new']);
  }

  /**
   * Method than delete all user of type DOCTOR.
   */
  deleteAllDoctors() {
    this.dialog
      .open(ConfirmComponent, {
        data: 'Do you want to delete all doctos?'
      })
      .afterClosed()
      .subscribe((confirmado: boolean) => {
        if (confirmado) {
          this.dataSource.paginator = this.paginator;
          this._userService.deleteAllDoctors().then(users => {
            this.dataSource.data = users;
          });
        }
      });
  }

}
