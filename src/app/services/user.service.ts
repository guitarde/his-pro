import { Injectable } from '@angular/core';
import { User } from '../models/user.type';
import { ProfesionalType } from '../models/enum/profesional.enum';
import { InsurerType } from '../models/enum/insurer.enum';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  USER_DATA: User[] = [

    {
      _id: 1, name: 'Luis 1', surName: 'Reyna', lastName: 'Chávez', identification: '54456779F', birthDate: '27-07-1996', genero: 'H',
      patient: { nch: 123456 }
    },
    {
      _id: 2, name: 'Luis 2', surName: 'Reyna', lastName: 'Chávez', identification: '54456779F', birthDate: '27-07-1996', genero: 'M',
      patient: { nch: 534556 }
    },
    {
      _id: 3, name: 'Luis 3', surName: 'Reyna', lastName: 'Chávez', identification: '54456779F', birthDate: '27-07-1996', genero: 'M',
      profesional: {
        nColegiado: 23434, profesionalType: ProfesionalType.MEDICO,
        insurer: { insurerName: 'SANITAS', insurerType: InsurerType.DENTAL, numberTarjeta: 987655664 }
      }
    },
    {
      _id: 4, name: 'Luis 4', surName: 'Reyna', lastName: 'Chávez', identification: '54456779F', birthDate: '27-07-1996', genero: 'M',
      patient: { nch: 123456 }
    },
    {
      _id: 5, name: 'Luis 5', surName: 'Reyna', lastName: 'Chávez', identification: '54456779F', birthDate: '27-07-1996', genero: 'M',
      profesional: {
        nColegiado: 23434, profesionalType: ProfesionalType.MEDICO,
        insurer: { insurerName: 'SANITAS', insurerType: InsurerType.DENTAL, numberTarjeta: 987655664 }
      }
    },
    {
      _id: 6, name: 'Luis 6', surName: 'Reyna', lastName: 'Chávez', identification: '54456779F', birthDate: '27-07-1996', genero: 'M',
      profesional: {
        nColegiado: 23434, profesionalType: ProfesionalType.MEDICO,
        insurer: { insurerName: 'SANITAS', insurerType: InsurerType.DENTAL, numberTarjeta: 987655664 }
      }
    },
    {
      _id: 7, name: 'Luis 7', surName: 'Reyna', lastName: 'Chávez', identification: '54456779F', birthDate: '27-07-1996', genero: 'H',
      patient: { nch: 123456 }
    },
    {
      _id: 8, name: 'Luis 8', surName: 'Reyna', lastName: 'Chávez', identification: '54456779F', birthDate: '27-07-1996', genero: 'H',
      profesional: {
        nColegiado: 23434, profesionalType: ProfesionalType.MEDICO,
        insurer: { insurerName: 'SANITAS', insurerType: InsurerType.DENTAL, numberTarjeta: 987655664 }
      }
    },
    {
      _id: 9, name: 'Luis 9', surName: 'Reyna', lastName: 'Chávez', identification: '54456779F', birthDate: '27-07-1996', genero: 'H',
      patient: { nch: 123456 }
    },
    {
      _id: 10, name: 'Luis 10', surName: 'Reyna', lastName: 'Chávez', identification: '54456779F', birthDate: '27-07-1996', genero: 'H',
      profesional: {
        nColegiado: 23434, profesionalType: ProfesionalType.MEDICO,
        insurer: { insurerName: 'SANITAS', insurerType: InsurerType.DENTAL, numberTarjeta: 987655664 }
      }
    },
    {
      _id: 11, name: 'Luis 11', surName: 'Reyna', lastName: 'Chávez', identification: '54456779F', birthDate: '27-07-1996', genero: 'H',
      profesional: {
        nColegiado: 23434, profesionalType: ProfesionalType.MEDICO,
        insurer: { insurerName: 'SANITAS', insurerType: InsurerType.DENTAL, numberTarjeta: 987655664 }
      }
    }

  ];

  constructor() { }

  getAllUsers() {
    return this.USER_DATA;
  }


  newUser() {
    console.log("New user go")
  }

}
