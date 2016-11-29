import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LandingComponent } from './landing.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
