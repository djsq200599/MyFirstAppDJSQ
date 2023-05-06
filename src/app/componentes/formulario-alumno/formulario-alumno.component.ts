import { Component, EventEmitter, Output, } from '@angular/core';
import { Alumno, tipoSeccion } from 'src/app/modelo/alumno';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Output() public puchalumno = new EventEmitter<Alumno>();
  public nuevoAlumno: Alumno = {
    rut: 0 , nombre: '', apellido: '', edad: 0, seccion: 'B'
  }

  public nuevoRut(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.rut = Number.parseInt(elemento.value) || 0;
  }

  public nuevoNombre(evento: Event): void {
    const variable = evento.target as HTMLInputElement;
    this.nuevoAlumno.nombre = variable.value;
  }

  public nuevoApellido(evento: Event): void {
    const variable = evento.target as HTMLInputElement;
    this.nuevoAlumno.apellido = variable.value;
  }

  public nuevoEdad(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.edad = Number.parseInt(elemento.value) || 0;
  }

  public nuevoSeccion(evento: Event): void {
    const elemento = evento.target as HTMLSelectElement;
    this.nuevoAlumno.seccion = elemento.value as tipoSeccion
  }

  public guardarAlumno(): void {
    const copia: Alumno = {
      ...this.nuevoAlumno
    };
    this.puchalumno.emit(copia);
    this.nuevoAlumno.rut = 1;
    this.nuevoAlumno.nombre = '';
    this.nuevoAlumno.apellido = '';
    this.nuevoAlumno.edad = 1;
    this.nuevoAlumno.seccion = 'L';
  }

}

