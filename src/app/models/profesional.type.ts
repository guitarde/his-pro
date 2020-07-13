import { User } from './user.type';

export interface Profesional extends User {

    nColegiado: number;
    profesionalType: ProfesionalType;
    aseguradora: InsurerType;

}