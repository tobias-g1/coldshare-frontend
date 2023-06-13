import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendComponent } from './pages/send/send.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SendRoutingModule } from './send.routing.module';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';



@NgModule({
  declarations: [
    SendComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    SendRoutingModule,
    NzUploadModule,
    NzIconModule,
    SharedModule,
    NzButtonModule,
    NzAlertModule
  ],
  exports: [
    SendComponent
  ]
})
export class SendModule { }
