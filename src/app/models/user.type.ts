import { Patient } from './patient.type';
import { Profesional } from './profesional.type';
import { Address } from './address.type';

export interface User {

    _id: number;
    name: string;
    surName: string;
    lastName?: string;
    genero?: string;
    birthDate?: string;
    identification?: string;

    addres?: Address;

    patient?: Patient;
    profesional?: Profesional;

}