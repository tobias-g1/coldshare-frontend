import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeroComponent } from './components/hero/hero.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BenefitPanelComponent } from './components/benefit-panel/benefit-panel.component';
import { FeaturesComponent } from './components/features/features.component';
import { BannerComponent } from './components/banner/banner.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    BenefitPanelComponent,
    FeaturesComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
