import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from "../../models/IUser";


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor() { }
  public user:IUser = {
    name : '',
    email : '',
    password : ''
  };

  arr:string[]=["hjfggf",'fhgfhgtr','dfghfgfr','fdrtrfdf'];

  captureText:string='';
  textdefult:string='';

  ngOnInit(): void {
   // this.captchaComponent.captchaEndpoint = 'simple-captcha-endpoint.ashx';

    this.textdefult="ghdfsgd"
  }

  refreshText(){
    for (let i= 0;i<this.arr.length;i++){
      if (this.textdefult===this.arr[i]){
        this.textdefult=this.arr[i++];
      }else{

      }
    }
  }
  forgetPassword(){


  }
}
