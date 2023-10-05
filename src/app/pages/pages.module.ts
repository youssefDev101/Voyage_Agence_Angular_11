import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SouscriptionComponent } from './souscription/souscription.component';
import { FormsModule } from '@angular/forms';
import { OffreComponent } from './offre/offre.component';
import { OffreFavoriteComponent } from './offre-favorite/offre-favorite.component';

const DECLARATIONS = [
  SouscriptionComponent,
  OffreComponent,
  OffreFavoriteComponent
];

@NgModule({
  imports: [CommonModule, PagesRoutingModule ,FormsModule ,SharedModule],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
})
export class PagesModule {}
