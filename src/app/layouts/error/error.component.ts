import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/shared/helpers/globals';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {

  constructor(public globals:Globals) {}

  ngOnInit() {}
}
