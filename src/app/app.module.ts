import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ListarAlumnoComponent } from './componentes/listar-alumno/listar-alumno.component';
import { ListarHistorialComponent } from './componentes/listar-historial/listar-historial.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { SeccionComponent } from './componentes/seccion/seccion.component';
import { ListarSeccionComponent } from './componentes/listar-seccion/listar-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ListarAlumnoComponent,
    ListarHistorialComponent,
    HistorialComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent,
    SeccionComponent,
    ListarSeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
