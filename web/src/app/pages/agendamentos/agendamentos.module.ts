import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { AgendamentosRoutingModule, routedComponents } from './agendamentos-routing.module';
import {AgendamentoService} from './service/agendamento.service';
import { TextMaskModule } from 'angular2-text-mask';
import { CalendarModule } from 'angular-calendar';

@NgModule({
  imports: [
    CalendarModule.forRoot(),
    ThemeModule,
    AgendamentosRoutingModule,
    Ng2SmartTableModule,
    TextMaskModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    AgendamentoService,
  ],
})
export class AgendamentosModule { }
