import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';

import { ClickTravelService } from './services/click-travel.service';
import {  HttpClientModule } from '@angular/common/http';
import { TicketsListComponent } from './main/tickets-list/tickets-list.component';
import { TicketComponent } from './main/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TicketsListComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ClickTravelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
