import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import { BirthdayComponent } from './components/birthday/birthday.component';
import { AnniversaryComponent } from './components/anniversary/anniversary.component';
import { ValentinesDayComponent } from './components/valentines-day/valentines-day.component';
import { CountUpComponent } from './components/count-up/count-up.component';
import { CountUpAnniversaryComponent } from './components/count-up-anniversary/count-up-anniversary.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    BirthdayComponent,
    AnniversaryComponent,
    ValentinesDayComponent,
    CountUpComponent,
    CountUpAnniversaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
