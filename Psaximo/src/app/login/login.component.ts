import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';
import {EmailValidator} from '../validators/email.validator';
import {LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup

  private _loginService;

  url1 : string = "http://ajboggs.com";
  url2 : string = "/products/2"

  constructor(fb : FormBuilder, loginService : LoginService ) { 

    console.log(urljoin(this.url1,this.url2))

    console.log(addnumbers(2,3))
   
    this._loginService = loginService;

    this.form = fb.group({
      email : ["",Validators.compose([Validators.required, EmailValidator.IsValidEmail])],
      password : ["",Validators.compose([Validators.required, PasswordValidator.canContainSpace])]
    });

  }

  ngOnInit() {
  }

  login(){

    var result = this._loginService.login(this.form.controls["email"].value, this.form.controls["password"].value);

    if(!result){
      this.form.setErrors({ invalidLogin : true});
    }
    
  }

}
