import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SignupComponent} from './pages/signup/signup.component';
import {LoginComponent} from './pages/login/login.component';
import {TimelineComponent} from "./pages/timeline/timeline.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'time-line', component: TimelineComponent},
  {path: 'signup', loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent)},
  {path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)},
  {path: '**', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
