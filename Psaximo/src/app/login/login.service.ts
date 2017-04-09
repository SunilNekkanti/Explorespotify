import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  login(email,password){

    if(email == "anupavanm@gmail.com" && password === "Test@1234"){

      return true;
    }
    else
    {
      return false;
    }
  }

}
