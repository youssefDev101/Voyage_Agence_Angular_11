import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.css']
})
export class CustomAlertComponent implements OnInit {
  @Input() color: string;
  @Input() messageText: string;
  @Input() messageBtn: string;
  @Input() status: boolean;
  isShowAlert: boolean;
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.config.onGetAlert().subscribe(item => this.isShowAlert = item);
  }

  onCloseAlert(){
    this.config.onCloseAlert();
  }
}
