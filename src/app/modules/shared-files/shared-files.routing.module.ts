import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SharedFilesComponent } from './pages/shared-files/shared-files.component';

const routes: Routes = [
  { path: 'shared-files', component: SharedFilesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SharedFilesRoutingModule { }
