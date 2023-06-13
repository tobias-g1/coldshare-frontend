import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileNotFoundComponent } from './pages/file-not-found/file-not-found.component';
import { FileNotFoundRoutingModule } from './file-not-found.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzResultModule } from 'ng-zorro-antd/result';

@NgModule({
  declarations: [
    FileNotFoundComponent
  ],
  imports: [
    CommonModule,
    FileNotFoundRoutingModule,
    SharedModule,
    NzLayoutModule,
    NzResultModule
  ],
  exports: [
    FileNotFoundComponent
  ]
})
export class FileNotFoundModule { }
