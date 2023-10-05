import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModalComponent } from './components/main-modal/main-modal.component';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { Globals } from './helpers/globals';
import { HttpClientModule } from '@angular/common/http';
import { CustomAlertComponent } from './components/custom-alert/custom-alert.component';

const DECLARATIONS = [
  MainModalComponent,
  CustomModalComponent,
  CustomButtonComponent,
  CustomAlertComponent
];

@NgModule({
  imports: [CommonModule, FormsModule ,HttpClientModule],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  providers: [Globals]
})
export class SharedModule {}
