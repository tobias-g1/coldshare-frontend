import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ReceiveComponent } from './pages/receive/receive.component';

const routes: Routes = [
  { path: 'receive', component: ReceiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReceiveRoutingModule { }
