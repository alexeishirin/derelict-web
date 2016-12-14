import { Route, CanActivate, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import {AuthGuard} from "../auth/auth-guard.service";
import {HexComponent} from "../hex/hex.component";
import {MapModule} from "../map/map.module";

const routes: Route[] = [
  {
    path:'admin',
    redirectTo: 'admin/map',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'hex',
        component: HexComponent,
      },
      {
        path: 'map',
        loadChildren: () => MapModule
      }
    ]
  }
];

export const moduleRoutes = RouterModule.forChild(routes);
