import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './agendamentos.component';
import { ListAgendamentosComponent } from './list-agendamentos/list-agendamentos.component';
import {AddAgendamentoComponent} from './add-agendamento/add-agendamento.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
    path: 'list-agendamentos',
    component: ListAgendamentosComponent,
    },
    {
      path: 'add-agendamento',
      component: AddAgendamentoComponent,
    },
    {
      path: 'add-agendamento/:id',
      component: AddAgendamentoComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendamentosRoutingModule { }

export const routedComponents = [
  TablesComponent,
  ListAgendamentosComponent,
  AddAgendamentoComponent,
];
