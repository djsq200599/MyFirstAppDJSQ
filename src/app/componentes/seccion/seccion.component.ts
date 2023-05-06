import { Component, Input } from '@angular/core';
import { Seccion } from '../../modelo/seccion'

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent {
  @Input() public seccion!: Seccion;

}
