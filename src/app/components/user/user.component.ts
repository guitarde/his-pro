import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.type';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from '../dialog/message/message.component';

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

  action = '';
  tabActive = 'Patient';

  activateTabUserPatient = false;
  activateTabUserProfesional = false;

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
      insurer: [{
        cardNumber: '',
        insurerName: '',
        insurerType: ''
      }]
    },
    professional: {
      nColegiado: '',
      professionalType: ''
    }
  };


  constructor(private _userverService: UserService, private _snackBar: MatSnackBar,
    private _router: Router, private dialog: MatDialog, private ruteActiva: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.checkTypeOperations();
  }


  checkTypeOperations() {
    this.ruteActiva.data.subscribe(event => {
      if (event.type === 'edit') {
        this.title = 'Edit user';
        this.editUser = true;
        this._userverService.getUserById(this.ruteActiva.snapshot.params.id)
          .subscribe((resp: any) => {
            this.user = resp;
            this.evaluateTypeUser(this.user);
            this.action = 'edit';
            console.log(this.user);
          });
      }
      if (event.type === 'new') {
        this.activateTabUserPatient = true;
        this.activateTabUserProfesional = true;
      }
    });
  }

  /**
   * Method to save a user when he is new or we are editing information
   */
  saveUser(form: NgForm) {

    if (form.invalid) {
      this.openSnackBar('Review required fields', 'OK');
      return;
    }

    if (this.editUser) {
      this._userverService.editUser(this.deletePropertyTypeUser(this.user))
        .subscribe(() => {
          this._router.navigate([`/users/${this.user.id}`], { state: { user: this.user } });
          this.messageDialog('Successful user editing');
        });
    } else {
      this.hiddelTypeUserTab();
      this._userverService.newUser(this.deletePropertyTypeUser(this.user))
        .subscribe(() => {
          this._router.navigate([`/users/${this.user.id}`], { state: { user: this.user } });
          this.messageDialog('User successfully added');
        });
    }
  }



  /**
   * Change the value of a properties of input
   * @param typeTabUser index of type tab {Profesional or Patient}
   */
  typeUserTab(event) {

    this.requiredTypeUserTab = false;
    this.tabActive = event.tab.textLabel;
    if (this.tabActive === 'Patient') {
      this.requiredTypeUserTab = true;
    }

  }

  /**
   * Method that hides a tab when we save a new user.
   */

  hiddelTypeUserTab() {
    if (this.requiredTypeUserTab) {
      this.activateTabUserPatient = !this.activateTabUserProfesional;
    } else {
      this.activateTabUserProfesional = !this.activateTabUserPatient;
    }
  }

  /**
   * Method que comprueba que typo de usuarios es en el momento de realizar una edicion de usuairo
   */

  evaluateTypeUser(user: User) {
    if ('patient' in user) {
      this.activateTabUserProfesional = !this.activateTabUserPatient;
    } else {
      this.activateTabUserPatient = !this.activateTabUserProfesional;
    }
  }

  /**
   * Method to remove a patient or professional property
   */

  deletePropertyTypeUser(user: User) {
    if (this.tabActive === 'Patient') {
      delete user.professional;
    } else {
      delete user.patient;
    }
    return user;
  }

  /**
   * DIALOGS AND MESSAGE IMPLMENTS CALLS
   */

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  messageDialog(message: string) {
    this.dialog.open(MessageComponent, {
      data: message
    });
  }

  /** =============================================== */

  getTypeProfesional() {
    return ['DOCTOR', 'NURSE', 'ADMINISTRATIVE'];
  }

  getTypeInsurer() {
    return ['HEALTH', 'FAMILY', 'DENTAL'];
  }

  addPatientFields() {
    this.user.patient.insurer.push({
      cardNumber: '',
      insurerName: '',
      insurerType: ''
    });
  }
}
