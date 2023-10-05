import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/shared/helpers/globals';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor(public globals :Globals) { }

  ngOnInit() {
  }

}
