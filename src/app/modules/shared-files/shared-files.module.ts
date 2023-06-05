import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFilesComponent } from './pages/shared-files/shared-files.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SharedFilesRoutingModule } from './shared-files.routing.module';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    SharedFilesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedFilesRoutingModule,
    NzLayoutModule,
    NzEmptyModule,
    NzButtonModule
  ],
  exports: [
    SharedFilesComponent
  ]
})
export class SharedFilesModule { }
