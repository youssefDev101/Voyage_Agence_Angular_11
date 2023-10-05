import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/shared/helpers/globals';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-offre-favorite',
  templateUrl: './offre-favorite.component.html',
  styleUrls: ['./offre-favorite.component.css']
})
export class OffreFavoriteComponent implements OnInit {

  offres :any[] =[];
  constructor(public globals:Globals,private config:ConfigService) { }

  ngOnInit() {
    this.config.currentOffreFav.subscribe((items) => this.offres =items);
  }

  getAllOffresLoved(){
    this.config.currentOffreFav.subscribe((items) => this.offres =items);
    this.offres = Array.from(this.offres.reduce((m, t) => m.set(t.name, t), new Map()).values());
  }
  
}
