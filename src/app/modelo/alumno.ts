export type tipoSeccion = 'L' | 'M' | 'H' | 'B' | 'R';
export interface Alumno {
  id?: number;
  rut: number;
  nombre: string;
  apellido: string;
  edad: number;
  seccion: tipoSeccion;
}
