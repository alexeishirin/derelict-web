import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './about/about.module';
import { SharedModule } from './shared/shared.module';

import {MaterialModule, MdSidenavModule, MdButtonModule, MdCardModule, MdGridListModule, MdIconModule} from '@angular/material';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), AboutModule, 
    SharedModule.forRoot(), MaterialModule.forRoot(), MdSidenavModule.forRoot(),
    MdButtonModule.forRoot(), MdCardModule.forRoot(), MdGridListModule.forRoot(), MdIconModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
