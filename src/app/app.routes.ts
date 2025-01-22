import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

import {TimelineComponent} from "./pages/timeline/timeline.component";
import {NgModule} from "@angular/core";
import {EventsListComponent} from "./pages/events-list/events-list.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'time-line', component: TimelineComponent},
  {path: 'events-list', component: EventsListComponent},
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
