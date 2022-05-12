import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { BotDetectCaptchaModule } from 'angular-captcha';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';

@NgModule({
  declarations: [UsersComponent, LoginComponent, RegisterComponent, DashboardComponent, ForgetpasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
