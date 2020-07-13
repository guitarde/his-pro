import { Paciente } from './paciente.type';
import { Profesional } from './profesional.type';
import { Address } from './direccion.type';
export interface User {

    name: string;
    surName: string;
    lastName: string;
    genero: string;
    birthDate: string;
    nifPassport: string;

    addres: Address;

    paciente: Paciente;
    profesional: Profesional;
}