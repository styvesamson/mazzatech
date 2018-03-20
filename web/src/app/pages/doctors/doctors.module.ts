import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { DoctorsRoutingModule, routedComponents } from './doctors-routing.module';
import {DoctorService} from './service/doctor.service';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    ThemeModule,
    DoctorsRoutingModule,
    Ng2SmartTableModule,
    TextMaskModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    DoctorService,
  ],
})
export class DoctorsModule { }
