import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CookiesRoutingModule } from './cookies.routing.module';

@NgModule({
  declarations: [
    CookiesComponent
  ],
  imports: [
    CommonModule,
    CookiesRoutingModule,
    NzLayoutModule
  ],
  exports: [
    CookiesComponent
  ]
})

export class CookiesModule { }
