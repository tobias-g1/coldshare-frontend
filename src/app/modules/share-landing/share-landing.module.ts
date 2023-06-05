import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareLandingComponent } from './pages/share-landing/share-landing.component';
import { ShareLandingRoutingModule } from './share-landing.routing.module';



@NgModule({
  declarations: [
    ShareLandingComponent
  ],
  imports: [
    CommonModule,
    ShareLandingRoutingModule
  ],
  exports: [
    ShareLandingComponent
  ]
})
export class ShareLandingModule { }
