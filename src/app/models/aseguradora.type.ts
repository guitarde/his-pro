
type InsurerType = 'SALUD' | 'FAMILIAR' | 'DENTAL';

export interface Insurer {
    insurerName: string;
    insurerType: InsurerType;
    cardNumber: number;
}