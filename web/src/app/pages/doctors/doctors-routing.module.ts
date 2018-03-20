import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './doctors.component';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import {AddDoctorComponent} from './add-doctor/add-doctor.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
    path: 'list-doctors',
    component: ListDoctorsComponent,
    },
    {
      path: 'add-doctor',
      component: AddDoctorComponent,
    },
    {
      path: 'add-doctor/:id',
      component: AddDoctorComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule { }

export const routedComponents = [
  TablesComponent,
  ListDoctorsComponent,
  AddDoctorComponent,
];
