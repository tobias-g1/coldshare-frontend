import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SendComponent } from './pages/send/send.component';

const routes: Routes = [
  { path: 'send', component: SendComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SendRoutingModule { }
