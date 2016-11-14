import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MelodyComponent } from './melody.component';
import { ResponseService } from '../shared/response/index';
import { MdButtonModule, MdCardModule, MdGridListModule, MdIconModule} from '@angular/material';
import {PlayerService} from "../shared/response/player.service";

@NgModule({
  imports: [CommonModule, SharedModule, MdButtonModule, MdCardModule, MdGridListModule, MdIconModule],
  declarations: [MelodyComponent],
  exports: [MelodyComponent],
  providers: [ResponseService, PlayerService]
})
export class MelodyModule { }
