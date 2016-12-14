import { Route} from '@angular/router';
import { LandingComponent } from './landing.component';

export const routes : Route[] = [
  {
    path: '**',
    component: LandingComponent,
    canActivate: []
  }
];
