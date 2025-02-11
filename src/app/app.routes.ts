import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

import {TimelineComponent} from "./pages/timeline/timeline.component";
import {NgModule} from "@angular/core";
import {EventsListComponent} from "./pages/events-list/events-list.component";
import {SportEventDetailsComponent} from "./pages/sport-event-details/sport-event-details.component";
import {CreateSportEventComponent} from "./pages/create-sport-event/create-sport-event.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'time-line', component: TimelineComponent},
  {path: 'events-list', component: EventsListComponent},
  {path: 'create-event', component: CreateSportEventComponent},
  {path: 'event/:id', component: SportEventDetailsComponent},
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
