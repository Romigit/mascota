import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargarMascotaComponent } from './componentes/cargar-mascota/cargar-mascota.component';
import { ListadoMascotaComponent } from './componentes/listado-mascota/listado-mascota.component';
import { MascotaComponent } from './componentes/mascota/mascota.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CargarMascotaComponent,
    ListadoMascotaComponent,
    MascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
