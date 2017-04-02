import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { RatingComponent } from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { TrucatePipe } from './pipes/trucate.pipe';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementsComponent,
    RatingComponent,
    ProductComponent,
    ProductsComponent,
    TrucatePipe,
    JumbotronComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
