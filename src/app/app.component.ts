import { Component } from '@angular/core';
import { Alumno } from './modelo/alumno';
import { Seccion } from './modelo/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  public alumnos: Array<Alumno> = [
    {id: 1, rut: 123456789, nombre: 'Beto', apellido: 'lete', edad: 23, seccion: 'B' },
    {id: 2, rut: 987654321, nombre: 'Fran', apellido: 'Sepu', edad: 21, seccion: 'L' }
  ]

  public secciones: Array<Seccion> = [
    {id: 1, siglaSeccion: "L"}
  ]

  public guardarAlumno(alumno: Alumno): void {
    const id = this.alumnos.length + 1;
    alumno.id = id;
    this.alumnos.push(alumno);
  }

  public guardarSeccion(seccion: Seccion): void {
    const id = this.secciones.length + 1;
    seccion.id = id;
    this.secciones.push(seccion);
  }
}
