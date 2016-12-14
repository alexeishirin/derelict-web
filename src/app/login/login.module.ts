import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MdCardModule, MdInputModule, MdButtonModule } from '@angular/material';
import {moduleRoutes} from "./login.routes";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    moduleRoutes
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
