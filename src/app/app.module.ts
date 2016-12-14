import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LandingModule } from './landing/landing.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from '@angular/material';
import { Ng2Webstorage } from "ng2-webstorage";

import { AuthService, HttpService, AuthGuard } from './auth';

import { AppComponent } from './app.component';

import { APP_CONFIG, AppConfig } from './app.config';

import { routes } from './app.routes';
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    SharedModule,
    LoginModule,
    AdminModule,
    LandingModule,
    Ng2Webstorage
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    AuthService,
    HttpService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
