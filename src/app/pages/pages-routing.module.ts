import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffreFavoriteComponent } from './offre-favorite/offre-favorite.component';
import { OffreComponent } from './offre/offre.component';
import { SouscriptionComponent } from './souscription/souscription.component';

const routes: Routes = [
  { path: 'souscriptions', component: SouscriptionComponent },
  { path: 'offres', component: OffreComponent },
  { path: 'offres-favorites', component: OffreFavoriteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
