import { Component, EventEmitter, Output } from '@angular/core';
import { Seccion } from 'src/app/modelo/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
 @Output() public puchaseccion = new EventEmitter<Seccion>();
 public nuevoSeccion: Seccion = {
  siglaSeccion: ''
 }

 public nuevoSigla(evento: Event): void {
  const variable = evento.target as HTMLInputElement;
  this.nuevoSeccion.siglaSeccion = variable.value;
}

public guardarSeccion(): void {
  const copia: Seccion = {
    ...this.nuevoSeccion
  };
  this.puchaseccion.emit(copia);
  this.nuevoSeccion.siglaSeccion = " "
}

}
