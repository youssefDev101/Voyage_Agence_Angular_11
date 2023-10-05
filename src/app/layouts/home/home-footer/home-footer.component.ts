import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/shared/helpers/globals';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent implements OnInit {

  constructor(public globals :Globals) { }

  ngOnInit() {
  }

}
