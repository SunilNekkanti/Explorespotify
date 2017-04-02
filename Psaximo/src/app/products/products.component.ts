import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductsService} from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  products : Product[];

  constructor(_productsService : ProductsService) {

    this.products = _productsService.getProducts();

    console.log(this.products);

  }

  ngOnInit() {
  }

}
