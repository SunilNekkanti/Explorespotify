import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { RatingComponent } from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { TrucatePipe } from './pipes/trucate.pipe';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Routing } from './app.routing';
import { ArtistComponent } from './artist/artist.component';

import { AuthGuardService } from './auth-guard.service';
import {LoginService } from './login/login.service';
import { PreventUnsavedChangesGuardService } from './prevent-unsaved-changes-guard.service'

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementsComponent,
    RatingComponent,
    ProductComponent,
    ProductsComponent,
    TrucatePipe,
    JumbotronComponent,
    UserFormComponent,
    LoginComponent,
    SearchComponent,
    HomeComponent,
    NotfoundComponent,
    ArtistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [
    LoginService,
    AuthGuardService,
    PreventUnsavedChangesGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
