import { Patient } from './patient.type';
import { Professional } from './profesional.type';
import { Address } from './address.type';

export interface User {

    _id?: number;
    name: string;
    surname: string;
    lastname?: string;
    gender?: string;
    birthDate?: string;
    identification?: string;

    address?: Address;

    patient?: Patient;
    professional?: Professional;

}