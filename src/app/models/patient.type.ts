import { Insurer } from './aseguradora.type';

export interface Patient  {

    nch: string;
    insurer?: Insurer;
}