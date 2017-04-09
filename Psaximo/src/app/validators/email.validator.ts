import {FormControl } from '@angular/forms'

export class EmailValidator{

        static IsValidEmail (formControl : FormControl){

             let EMAIL_REGEXP  = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

             return EMAIL_REGEXP.test(formControl.value) ? null : { IsValidEmail : true }
        }
}