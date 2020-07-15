import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.type';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  requiredTypeUserTab = true;
  title = 'New User';
  editUser: boolean;
  identificationType: string;
  user: User = {
    id: 0,
    name: '',
    surname: '',
    genero: '',
    address: {
      city: '',
      street: '',
      number: '',
      door: '',
      codePostal: ''
    },
    patient: {
      nch: '',
      insurer: {
        cardNumber: '',
        insurerName: '',
        insurerType: ''
      }
    },
    profesional: {
      nColegiado: '',
      profesionalType: ''
    }
  };

  constructor(private _userverService: UserService, private _snackBar: MatSnackBar, private _router: Router) {

    if (this._router.getCurrentNavigation().extras.state?.type === 'edit') {
      this.user = this._router.getCurrentNavigation().extras.state?.user;
      this.title = 'Edit';
      this.editUser = true;
      console.log('Editando...');
    }
  }
  ngOnInit(): void {

  }

  saveUser(form: NgForm) {

    if (form.invalid) {
      this.openSnackBar('Review required fields', 'OK');
      return;
    }

    if (this.editUser) {
      this._userverService.editUser(this.user)
        .subscribe();

    } else {
      this._userverService.newUser(this.user)
        .subscribe();
    }

  }



  getTypeProfesional() {
    return ['DOCTOR', 'NURSE', 'ADMIN'];
  }

  getTypeInsurer() {
    return ['HEALTH', 'FAMILY', 'DENTAL'];
  }


  /**
   * Change the value of a properties of input
   * @param typeTabUser index of type tab {Profesional or Patient}
   */
  typeUserTab(typeTabUser: number) {
    this.requiredTypeUserTab = typeTabUser === 0 ? true : false;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
