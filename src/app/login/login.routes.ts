import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes : Route[] = [
  {
    path: 'login',
    component: LoginComponent
  }
];

export const moduleRoutes = RouterModule.forChild(routes);
