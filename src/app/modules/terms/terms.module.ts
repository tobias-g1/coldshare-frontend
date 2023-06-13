import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './pages/terms/terms.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { TermsRoutingModule } from './terms.routing.module';



@NgModule({
  declarations: [
    TermsComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    TermsRoutingModule
  ],
  exports: [
    TermsComponent
  ]
})
export class TermsModule { }
