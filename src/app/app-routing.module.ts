import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { OfferteComponent } from './components/offerte/offerte.component';
import { ServiziComponent } from './components/servizi/servizi.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContattiComponent } from './components/contatti/contatti.component';

const routes: Routes = [
  {
    path: 'landingpage',
    component: LandingpageComponent,
  },
  {
    path: 'offerte',
    component: OfferteComponent,
  },
  {
    path: 'servizi',
    component: ServiziComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },

  {
    path: 'contatti',
    component: ContattiComponent,
  },
  { path: '**', redirectTo: '/landingpage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
