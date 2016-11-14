import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { MelodyRoutes } from './melody/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...MelodyRoutes
];