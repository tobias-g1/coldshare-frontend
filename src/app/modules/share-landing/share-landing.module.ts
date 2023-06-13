import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareLandingComponent } from './pages/share-landing/share-landing.component';
import { ShareLandingRoutingModule } from './share-landing.routing.module';
import { SharedFilesModule } from '../shared-files/shared-files.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ShareLandingComponent
  ],
  imports: [
    CommonModule,
    ShareLandingRoutingModule,
    SharedFilesModule,
    NzLayoutModule,
    NzAlertModule,
    SharedModule
  ],
  exports: [
    ShareLandingComponent
  ]
})
export class ShareLandingModule { }
