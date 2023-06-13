import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { MyFilesComponent } from './pages/my-files/my-files.component';

const routes: Routes = [
  { path: 'my-files', component: MyFilesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MyFilesRoutingModule { }
