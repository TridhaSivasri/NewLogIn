import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ForgetpasswordComponent} from "./components/forgetpassword/forgetpassword.component";

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'dashboard',component:DashboardComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
