import { Component, Input } from '@angular/core';
import { Seccion } from 'src/app/modelo/seccion'
@Component({
  selector: 'app-listar-seccion',
  templateUrl: './listar-seccion.component.html',
  styleUrls: ['./listar-seccion.component.scss']
})
export class ListarSeccionComponent {
  @Input() public listarSeccion!: Array<Seccion>;

}
