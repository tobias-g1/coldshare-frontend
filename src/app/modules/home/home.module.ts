import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeroComponent } from './components/hero/hero.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [


    HomeComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzLayoutModule,
    NzButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
