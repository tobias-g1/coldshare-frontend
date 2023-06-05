import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ShareLandingComponent } from './pages/share-landing/share-landing.component';

const routes: Routes = [
  { path: 'shared/:link', component: ShareLandingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShareLandingRoutingModule { }
