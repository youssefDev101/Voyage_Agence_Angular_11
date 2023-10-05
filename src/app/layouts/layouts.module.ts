import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layouts-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

const DECLARATIONS = [
  HomeComponent,
  HomeHeaderComponent,
  HeaderComponent,
  FooterComponent,
  HomeContentComponent,
  HomeFooterComponent,
  LoginComponent,
  ErrorComponent,
];

@NgModule({
  imports: [CommonModule, LayoutRoutingModule ,SharedModule ,FormsModule],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
})
export class LayoutsModule {}
