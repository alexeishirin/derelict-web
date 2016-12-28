import { ModuleWithProviders} from '@angular/core'
import { Route, RouterModule } from '@angular/router';
import {MapComponent} from "./map.component";
import {EditMapComponent} from "./edit-map/edit-map.component";
import {MapDetailsComponent} from "./map-details/map-details.component";
import {EditHexComponent} from "./edit-hex/edit-hex.component";

const routes : Route[] = [
  {
    path: '',
    component: MapComponent,
  },
  {
    path: ':mapId/edit',
    component: EditMapComponent
  },
  {
    path: ':mapId',
    component: MapDetailsComponent
  },
  {
    path: ':mapId/hexes/:hexId/edit',
    component: EditHexComponent
  }
];

export const moduleRoutes = RouterModule.forChild(routes);
