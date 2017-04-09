import { FormControl } from '@angular/forms'

export class PasswordValidator{

    static canContainSpace(formControl : FormControl){

        if(formControl.value.indexOf(' ') > 0){

            return {canContainSpace : true}
        }

        return null;
    }
}