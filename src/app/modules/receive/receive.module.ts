import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiveComponent } from './pages/receive/receive.component';
import { ReceiveRoutingModule } from './receive.routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzAlertModule } from 'ng-zorro-antd/alert';



@NgModule({
  declarations: [
    ReceiveComponent
  ],
  imports: [
    CommonModule,
    ReceiveRoutingModule,
    NzLayoutModule,
    FormsModule,
    NzButtonModule,
    SharedModule,
    NzAlertModule
  ],
  exports: [
    ReceiveComponent
  ]
})
export class ReceiveModule { }
