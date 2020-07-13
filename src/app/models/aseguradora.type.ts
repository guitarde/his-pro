import { InsurerType } from './enum/insurer.enum';


export interface Insurer {
    insurerName: string;
    insurerType: InsurerType;
    numberTarjeta: number;
}