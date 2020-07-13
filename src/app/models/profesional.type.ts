
import { ProfesionalType } from './enum/profesional.enum';
import { Insurer } from './aseguradora.type';

export interface Profesional {

    nColegiado: number;
    profesionalType: ProfesionalType;
    insurer: Insurer;

}