import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzResultModule } from 'ng-zorro-antd/result';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    SharedModule,
    NzLayoutModule,
    NzResultModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
