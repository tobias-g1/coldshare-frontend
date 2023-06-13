import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { FileNotFoundComponent } from './pages/file-not-found/file-not-found.component';
;

const routes: Routes = [
  { path: 'file-not-found', component: FileNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FileNotFoundRoutingModule { }
