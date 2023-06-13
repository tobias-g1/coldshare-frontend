import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CookiesComponent } from './pages/cookies/cookies.component';

const routes: Routes = [
  { path: 'cookies', component: CookiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CookiesRoutingModule { }
