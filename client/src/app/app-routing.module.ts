import { CitaFormComponent } from './components/cita-form/cita-form.component';
import { CosmeticoFormComponent } from './components/cosmetico-form/cosmetico-form.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { CosmeticosListComponent } from './components/cosmeticos-list/cosmeticos-list.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full' // porque redirecciona a otro lugar
  },
  {
    path: 'empleados',
    component: EmpleadoListComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'empleados/add',
    component: EmpleadoFormComponent
  },
  {
    path: 'empleados/edit/:id',
    component: EmpleadoFormComponent
  },
  {
    path: 'clientes/add',
    component: ClienteFormComponent
  },
  {
    path: 'clientes/edit/:id',
    component: ClienteFormComponent
  },
  {
    path: 'clientes',
    component: ClienteListComponent
  },
  {
    path: 'cosmeticos',
    component: CosmeticosListComponent
  },
  {
    path: 'cosmeticos/add',
    component: CosmeticoFormComponent
  },
  {
    path: 'cosmeticos/edit/:id',
    component: CosmeticoFormComponent
  },
  {
    path: 'citas/add',
    component: CitaFormComponent
  },
  {
    path: 'citas/edit/:id',
    component: CitaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
