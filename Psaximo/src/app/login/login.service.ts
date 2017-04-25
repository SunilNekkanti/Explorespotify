import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class LoginService {

  isLoggedIn = false;

  constructor(private _router : Router) { }

  login(email,password){

    if(email == "anupavanm@gmail.com" && password === "Test@1234"){

        this.isLoggedIn = true;
      
        this._router.navigate(['']);

        return true;

    }
    else
    {
        this.isLoggedIn = false;

        return false;
    }
  }

  logout(){

    this.isLoggedIn = false;

  }

}
