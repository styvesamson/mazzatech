import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { UsersRoutingModule, routedComponents } from './users-routing.module';
import {UserService} from './service/user.service';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    ThemeModule,
    UsersRoutingModule,
    Ng2SmartTableModule,
    TextMaskModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    UserService,
  ],
})
export class UsersModule { }
