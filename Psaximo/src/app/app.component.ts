import { Component } from '@angular/core';
import {ProductService} from './product/product.service'
import {AdvertisementService} from './advertisements/advertisement.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService,
              AdvertisementService
  ]
})
export class AppComponent {
  title = 'title';
}

