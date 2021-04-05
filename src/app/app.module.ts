import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ServiziComponent } from './components/servizi/servizi.component';
import { OfferteComponent } from './components/offerte/offerte.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ServiziComponent,
    OfferteComponent,
    ContattiComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
