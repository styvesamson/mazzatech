import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './users.component';
import { ListUsersComponent } from './list-users/list-users.component';


const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
    path: 'list-users',
    component: ListUsersComponent,
    },
    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }

export const routedComponents = [
  TablesComponent,
  ListUsersComponent,
];
