import { Component, OnInit } from '@angular/core';
import {IUser} from '../../models/IUser';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };
  public userDetails:IUser={
    name:"",
    email:"",
    password:""
  } ;
  public errorMessage:string ="";
  public message:string = "";

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }
  userLogin(){
    this.userService.login(this.user).subscribe((data)=>{
        this.message=data.result;
        let  token=data.token;
        this.userDetails=(data.user);
        localStorage.setItem('token',token);
        localStorage.setItem('users',JSON.stringify(this.userDetails));
        this.router.navigate(['/users/dashboard']);

      },
      (error)=>{
        this.errorMessage=error;
      })

  }


}
