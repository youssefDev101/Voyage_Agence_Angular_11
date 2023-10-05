import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent implements OnInit {
  @Input() buttonName: string;
  @Input() buttonStyle: string;
  @Input() buttonIcone: string;
 
  constructor(private config:ConfigService) {}

  onClickOpenModal() {
    this.config.onChangeModal(true);
  }
  
  ngOnInit() {}
}
