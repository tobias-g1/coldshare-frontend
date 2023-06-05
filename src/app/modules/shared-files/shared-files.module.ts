import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFilesComponent } from './pages/shared-files/shared-files.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SharedFilesRoutingModule } from './shared-files.routing.module';

@NgModule({
  declarations: [
    SharedFilesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedFilesRoutingModule,
    NzLayoutModule
  ],
  exports: [
    SharedFilesComponent
  ]
})
export class SharedFilesModule { }
