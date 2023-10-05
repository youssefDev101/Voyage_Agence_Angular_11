import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/shared/helpers/globals';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  showCustomModal :boolean=false;
  constructor(public globals :Globals) { }

  ngOnInit() {
  }

  onHideCustomModal($event){
    this.showCustomModal=$event;
  }
}
