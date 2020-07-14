type ProfesionalType = 'MEDICO' | 'ENFERMERO' | 'ADMINISTRADOR';

export interface Profesional {

    nColegiado: number;
    profesionalType: ProfesionalType;

}