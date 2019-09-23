import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {RecaptchaModule} from "ng-recaptcha";


@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RecaptchaModule
  ]
})
export class LoginModule { }
