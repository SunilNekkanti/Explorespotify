import { Component } from '@angular/core';
import {AdvertisementService} from './advertisements/advertisement.service';
import {ProductsService } from './products/products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
              AdvertisementService,
              ProductsService
  ]
})
export class AppComponent {
  title = 'title';
}

