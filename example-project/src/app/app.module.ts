import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {CamelCaseHumanModule} from 'angular2-camelcase';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CamelCaseHumanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
