import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { UserData } from "./user-data";
import { User } from "./user";
import { DataService } from "./userdata.service";
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(UserData),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
