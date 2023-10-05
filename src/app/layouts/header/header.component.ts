import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/shared/helpers/globals';
import { User } from 'src/app/shared/models/user';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  offres: any[] = [];
  currentUser: User;
  isExisted: boolean;
  constructor(
    private router: Router,
    public globals: Globals,
    private configService: ConfigService,
    private authService: AuthenticationService
  ) {
    this.authService.getUser().subscribe((user) => (this.currentUser = user));
    if (JSON.stringify(this.currentUser).length >0) {
      this.authService.userExisted.subscribe((item) => (this.isExisted = item));
      this.authService.userSubjetExisted.next(true);
    }
  }

  ngOnInit() {
    this.getNumberOffresLoved();
  }

  getNumberOffresLoved() {
    this.configService.currentOffreFav.subscribe(
      (items) => (this.offres = items)
    );
    this.offres = Array.from(
      this.offres.reduce((m, t) => m.set(t.name, t), new Map()).values()
    );
  }

  public onLogIn(): void {
    this.router.navigate(['/login']);
  }
  public onLogOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
