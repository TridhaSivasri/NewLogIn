import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../models/IUser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };
  public errorMessage = "";
  public message = "";
  public  token = "";
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }
  userRegistration() {
    this.userService.register(this.user).subscribe((data) => {
        this.message = data.result;
        this.router.navigate(['/users/login']);
      },
      (error) => {
        this.errorMessage = error;
      })
  }
}
