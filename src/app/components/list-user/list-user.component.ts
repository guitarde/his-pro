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
    this._userService.getAllUsers()
      .subscribe((resp: any) => this.dataSource.data = resp);
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
   * check it if a Patient or Professional
   * @param user each user values
   */

  evaluteTypeUser(user: User) {

    return 'patient' in user && user.patient.nch.length > 0 ? 'Patient' : 'Profesional';
  }


  addUser() {
    this._router.navigate(['/users/new']);
  }

  findUser(criteria: string) {
    console.log(criteria);
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

}
