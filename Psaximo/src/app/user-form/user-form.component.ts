import { Component, OnInit } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  countries : string[] = ["USA","UK","China","France","Russia","India"];
  
  model = new User('','','','');

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

    this.submitted = true;
   

  }

}
