import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/shared/helpers/globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public globals :Globals) { }

  ngOnInit() {
  }

}
