import { Route, RouterModule } from '@angular/router';
import {MapComponent} from "./map.component";
import {EditMapComponent} from "./edit-map/edit-map.component";

const routes : Route[] = [
  {
    path: '',
    component: MapComponent,
  },
  {
    path: 'edit/:id',
    component: EditMapComponent
  }
];

export const moduleRoutes = RouterModule.forChild(routes);
