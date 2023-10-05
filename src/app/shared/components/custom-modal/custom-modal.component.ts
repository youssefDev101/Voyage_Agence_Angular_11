import { Component, OnInit } from '@angular/core';
import { Globals } from '../../helpers/globals';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {

  showModal:boolean =false;
  captcha:string='';
  captchaGenerated:string='';

  partener :any ={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    message:'',
    isValid:false
  }
  constructor(public globals:Globals, private config :ConfigService) { }

  ngOnInit() {
    this.config.onSupportModal().subscribe(message => this.showModal = message);
    this.onChangeCaptcha();
  }

  onCloseModal(){
    this.config.onClearModal();
  }

  onSubmitPartenerForm(){
    let captcha = this.globals.removeStringSpace(this.captcha);
    let captchaGenerated = this.globals.removeStringSpace(this.captchaGenerated);
    if(!(captcha != "" && captcha === captchaGenerated)){
      alert('⚠️ saisissez les bonnes champs !!!');
      return;
    }
    alert('🎊 votre demandez est envoyer avec success 🎊');
    this.cleanPartnerForm();
    this.onCloseModal();
  }

  onChangeCaptcha(){
    this.captchaGenerated =this.globals.generateCaptcha();
  }

  private cleanPartnerForm() {
    this.partener = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    };
    this.captcha = "";
  }
}
