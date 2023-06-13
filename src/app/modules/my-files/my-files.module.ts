import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFilesComponent } from './pages/my-files/my-files.component';
import { MyFilesRoutingModule } from './my-files.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    MyFilesComponent
  ],
  imports: [
    CommonModule,
    MyFilesRoutingModule,
    SharedModule,
    NzLayoutModule,
    NzEmptyModule,
    NzButtonModule
  ],
  exports: [
    MyFilesComponent
  ]
})
export class MyFilesModule { }
