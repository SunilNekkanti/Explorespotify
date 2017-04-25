import { Component } from '@angular/core';
import {AdvertisementService} from './advertisements/advertisement.service';
import {ProductsService } from './products/products.service';
import {SearchService} from './search/search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
              AdvertisementService,
              ProductsService,
              SearchService,
  ]
})
export class AppComponent {
  title = 'title';
}

