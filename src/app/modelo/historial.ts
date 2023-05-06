import { Alumno } from "./alumno";

export interface Historial {
  fecha: Date;
  hora: Date;
  alumno: Alumno;
}
