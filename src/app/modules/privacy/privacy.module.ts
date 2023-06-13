import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { PrivacyRoutingModule } from './privacy.routing.module';



@NgModule({
  declarations: [
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    PrivacyRoutingModule
  ],
  exports: [
    PrivacyComponent
  ]
})
export class PrivacyModule { }
