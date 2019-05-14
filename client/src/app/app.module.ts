import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './components/principal/principal.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { CitaFormComponent } from './components/cita-form/cita-form.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { CosmeticosListComponent } from './components/cosmeticos-list/cosmeticos-list.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { CosmeticoFormComponent } from './components/cosmetico-form/cosmetico-form.component';
import { HeroComponent } from './components/principal/hero/hero.component';
import { ServicioListComponent } from './components/servicio-list/servicio-list.component';
import { VentaListComponent } from './components/venta-list/venta-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PrincipalComponent,
    EmpleadoListComponent,
    EmpleadoFormComponent,
    CitaFormComponent,
    ClienteListComponent,
    CosmeticosListComponent,
    ClienteFormComponent,
    CosmeticoFormComponent,
    HeroComponent,
    ServicioListComponent,
    VentaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
