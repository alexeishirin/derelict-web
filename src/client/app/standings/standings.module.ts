import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StandingsComponent } from './standings.component';
import { MdButtonModule } from '@angular/material';
import {PlayerService} from "../shared/response/player.service";

@NgModule({
  imports: [CommonModule, SharedModule, MdButtonModule],
  declarations: [StandingsComponent],
  exports: [StandingsComponent],
  providers: [PlayerService]
})
export class StandingsModule { }
