import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdTabsModule, MdIconModule, MdCardModule } from '@angular/material';
import { AdminComponent } from './admin.component';
import {HexModule} from "../hex/hex.module";
import {SharedModule} from "../shared/shared.module";
import {moduleRoutes} from "./admin.routes";
import {MapsStoreService} from "../map/maps-store.service";
import {MapsService} from "../map/maps.service";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MdTabsModule,
    MdIconModule,
    MdCardModule,
    RouterModule,
    moduleRoutes,
    HexModule
  ],
  declarations: [AdminComponent],
  providers: [
    MapsService,
    MapsStoreService
  ]
})
export class AdminModule { }
