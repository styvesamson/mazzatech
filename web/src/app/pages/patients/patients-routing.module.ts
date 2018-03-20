import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './patients.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import {AddPatientComponent} from './add-patient/add-patient.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
    path: 'list-patients',
    component: ListPatientsComponent,
    },
    {
      path: 'add-patient',
      component: AddPatientComponent,
    },
    {
      path: 'add-patient/:id',
      component: AddPatientComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule { }

export const routedComponents = [
  TablesComponent,
  ListPatientsComponent,
  AddPatientComponent,
];
