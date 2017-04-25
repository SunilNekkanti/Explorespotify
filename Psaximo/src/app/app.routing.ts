import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ArtistComponent } from './artist/artist.component';
import { LoginComponent } from './login/login.component'
import {AuthGuardService } from './auth-guard.service';
import {PreventUnsavedChangesGuardService} from './prevent-unsaved-changes-guard.service'

export const Routing = RouterModule.forRoot([

    { path : "",component : HomeComponent, canActivate : [AuthGuardService] },
    { path : "spotify",component : SearchComponent, canActivate : [AuthGuardService] },
    { path : "spotify/artist/:id/:name",component : ArtistComponent,  canActivate : [AuthGuardService] },
    { path : "signup", component :  UserFormComponent, canDeactivate : [PreventUnsavedChangesGuardService]},
    { path : "login", component :  LoginComponent},
    { path : "**",component : NotfoundComponent }
     

]);