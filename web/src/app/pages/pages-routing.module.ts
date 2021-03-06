import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'patients',
    loadChildren: './patients/patients.module#PatientsModule',
  }, {
    path: 'doctors',
    loadChildren: './doctors/doctors.module#DoctorsModule',
  }, {
    path: 'agendamentos',
    loadChildren: './agendamentos/agendamentos.module#AgendamentosModule',
  },
    {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
