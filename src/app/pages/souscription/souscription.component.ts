import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/shared/helpers/globals';
import { User } from 'src/app/shared/models/user';
import { ApiService } from 'src/app/shared/services/api.service';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-souscription',
  templateUrl: './souscription.component.html',
  styleUrls: ['./souscription.component.css'],
})
export class SouscriptionComponent implements OnInit {
  Alert ={
    messageText:'',
    messageBtn:'',
    color:'',
    imgStatus:false
  };
  subscription: any = {
    firstName: '',
    lastName: '',
    email: '',
    cin: '',
    phone: '',
    status: '',
    password: '',
    entreprise: {
      name: '',
      size: '',
    },
  };
  users: User[] = [];
  error: string;
  captcha: string = '';
  captchaGenerated: string = '';
  constructor(
    public globals: Globals,
    private router: Router,
    private apiService: ApiService,
    private configService:ConfigService
  ) {}

  ngOnInit() {
    this.onChangeCaptcha();
  }

  onSubmitSubscriptionForm() {
    let captcha = this.globals.removeStringSpace(this.captcha);
    let captchaGenerated = this.globals.removeStringSpace(
      this.captchaGenerated
    );
    if (
      !(
        captcha != '' &&
        captcha.toLowerCase() === captchaGenerated.toLowerCase()
      )
    ) {
      this.onShowAlert('⚠️ veuillez remplir les champs !!!','ok','info',false);
      return;
    }
    this.apiService
      .getUserByPhone(this.subscription.phone)
      .subscribe((res) => {
        this.users = res;
        if (this.users.length > 0) {
          this.error='⚠️ le cin / telephone deja existant !!!'
          return;
        }
        this.apiService.saveUser(this.subscription).subscribe(
          (res) => {
            this.onShowAlert('🎊 votre demandez est envoyer avec success 🎊','ok','info',true)
            this.router.navigate(['/login']);
            this.clearSubscriptionForm();
          },
          (err) => alert('error' + err)
        );
      });
  }

  clearSubscriptionForm() {
    this.subscription = {
      firstName: '',
      lastName: '',
      email: '',
      cin: '',
      phone: '',
      status: '',
      password: '',
      entreprise: {
        name: '',
        size: '',
      },
    };
  }
  onChangeStatus(status: string) {
    this.subscription.status = status;
  }
  onChangeSize(size: string) {
    this.subscription.entreprise.size = size;
  }
  onChangeCaptcha() {
    this.captchaGenerated = this.globals.generateCaptcha();
  }

  /*open alert */
  onShowAlert(messageText:string,messageBtn:string,color:string,imgStatus:boolean){
    this.Alert.messageText=messageText;
    this.Alert.messageBtn=messageBtn;
    this.Alert.color=color;
    this.Alert.imgStatus=imgStatus;
    this.configService.onOpenAlert();
  }
}
