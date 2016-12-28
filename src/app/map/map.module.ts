import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map.component';
import { MdCardModule, MdInputModule, MdButtonModule, MdIconModule } from '@angular/material';
import { MapsService } from "./maps.service";
import {moduleRoutes} from "./map.routes";
import { EditMapComponent } from './edit-map/edit-map.component';
import { MapDetailsComponent } from './map-details/map-details.component';
import { HexListComponent } from './hex-list/hex-list.component';
import { EditHexComponent } from './edit-hex/edit-hex.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    RouterModule,
    moduleRoutes
  ],
  declarations: [MapComponent, EditMapComponent, MapDetailsComponent, HexListComponent, EditHexComponent],
  providers: [
  ]
})
export class MapModule { }
