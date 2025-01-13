import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SignupComponent} from './pages/signup/signup.component';
import {LoginComponent} from './pages/login/login.component';
import {TimelineComponent} from "./pages/timeline/timeline.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'time-line', component: TimelineComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];
