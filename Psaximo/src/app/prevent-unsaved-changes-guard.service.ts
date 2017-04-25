import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router'
import { UserFormComponent } from './user-form/user-form.component'

@Injectable()
export class PreventUnsavedChangesGuardService implements CanDeactivate<UserFormComponent> {

  constructor() { }

  canDeactivate(component : UserFormComponent){

    if(!component.submitted)
      return confirm("Are you sure, you want to leave this page ?");


    return true;

  }

}
