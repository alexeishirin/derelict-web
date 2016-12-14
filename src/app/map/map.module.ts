import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map.component';
import { MdCardModule, MdInputModule, MdButtonModule } from '@angular/material';
import { MapsService } from "./maps.service";
import {moduleRoutes} from "./map.routes";
import { EditMapComponent } from './edit-map/edit-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    RouterModule,
    moduleRoutes
  ],
  declarations: [MapComponent, EditMapComponent],
  providers: [
  ]
})
export class MapModule { }
