import { ModuleWithProviders} from '@angular/core'
import { Route, CanActivate, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import {AuthGuard} from "../auth/auth-guard.service";
import {HexComponent} from "../hex/hex.component";
import {MapModule} from "../map/map.module";

export const routes: Route[] = [
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
        loadChildren: 'app/map/map.module#MapModule'
        //The next line is doing the same, but in this case there's no lazy loading and
        //the routes are nested in parent in the same way
        //But I couldn't get it to work with AoT
        // loadChildren: () => MapModule
      }
    ]
  }
];

export const moduleRoutes = RouterModule.forChild(routes);
