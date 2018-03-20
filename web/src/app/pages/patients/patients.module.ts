import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PatientsRoutingModule, routedComponents } from './patients-routing.module';
import {PatientService} from './service/patient.service';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    ThemeModule,
    PatientsRoutingModule,
    Ng2SmartTableModule,
    TextMaskModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    PatientService,
  ],
})
export class PatientsModule { }
