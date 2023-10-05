import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user :any = {
    username:'',
    password:''
  };
  error :string;
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    let resultat:any;
    this.authService.login(this.user.email,this.user.password).subscribe(
      res => {
        resultat=res,
        console.log(resultat.length);
        if(resultat.length <=0){
          this.error="⚠️ l'email/password est incorrect !!"
          return"";
        }
        this.error=""
        this.router.navigate(['/home']);
    },
    error => {
        this.error = error;
    });
  }
}
