import { Component, OnInit, ViewChild } from '@angular/core';


import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'identification', 'genero', 'birth', 'typeUser', 'options'];
  dataSource = new MatTableDataSource<PersonElement>(ELEMENT_DATA);

  value = '';
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  typeUserColor(type: string) {
    return type === 'Profesional' ? 'accent' : 'primary';
  }

  showPersona(person: PersonElement) {
    console.log(person);
  }

  addPerson() {
    console.log("Creando nuevo usuario");
  }

  findUser(criteria: string) {
    console.log(criteria);
  }
}

export interface PersonElement {

  position: number;
  name: string;
  identification: string;
  genero: string;
  birth: string;
  typeUser: string;
}

const ELEMENT_DATA: PersonElement[] = [

  { position: 1, name: 'Luis Reyna 1', identification: '54456779F', birth: '27-07-1996', genero: 'H', typeUser: 'Profesional' },
  { position: 2, name: 'Luis Reyna 2', identification: '54456779F', birth: '27-07-1996', genero: 'M', typeUser: 'Patient' },
  { position: 3, name: 'Luis Reyna 3', identification: '54456779F', birth: '27-07-1996', genero: 'M', typeUser: 'Profesional' },
  { position: 4, name: 'Luis Reyna 4', identification: '54456779F', birth: '27-07-1996', genero: 'M', typeUser: 'Profesional' },
  { position: 5, name: 'Luis Reyna 5', identification: '54456779F', birth: '27-07-1996', genero: 'M', typeUser: 'Patient' },
  { position: 6, name: 'Luis Reyna 6', identification: '54456779F', birth: '27-07-1996', genero: 'M', typeUser: 'Profesional' },
  { position: 7, name: 'Luis Reyna 7', identification: '54456779F', birth: '27-07-1996', genero: 'H', typeUser: 'Profesional' },
  { position: 8, name: 'Luis Reyna 8', identification: '54456779F', birth: '27-07-1996', genero: 'H', typeUser: 'Patient' },
  { position: 9, name: 'Luis Reyna 9', identification: '54456779F', birth: '27-07-1996', genero: 'H', typeUser: 'Patient' },
  { position: 10, name: 'Luis Reyna 10', identification: '54456779F', birth: '27-07-1996', genero: 'H', typeUser: 'Patient' },
  { position: 11, name: 'Luis Reyna 11', identification: '54456779F', birth: '27-07-1996', genero: 'H', typeUser: 'Patient' }

];