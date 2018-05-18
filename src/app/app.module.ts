import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule } from 'angularfire2/database'; 
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';

import { RouterModule, Routes } from '@angular/router';
import { PhoneService } from './phone.service';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { ResponseComponent } from './response/response.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { environment } from '../environments/environment.prod';
import { DatabaseService } from './database.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    ResponseComponent,
    HomeComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule , 
    HttpClientModule , 
    FormsModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule , 
    AngularFireAuthModule,

  ],
  providers: [PhoneService , DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
