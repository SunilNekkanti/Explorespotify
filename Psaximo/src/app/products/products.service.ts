import { Injectable } from '@angular/core';
import { Product } from '../product/product'

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts() : Product[]{

    return [
      new Product('http://loremflickr.com/150/150?random=1'
                ,'Product 1'
                ,new Date(2016,5,20)
                ,'4'
                ,'100'
                ,' long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'),
      new Product('http://loremflickr.com/150/150?random=2','Product 2',new Date(2015,5,20),'5','110' ,' long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'),
      new Product('http://loremflickr.com/150/150?random=3','Product 3',new Date(2015,5,20),'4','100' ,' long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'),
      new Product('http://loremflickr.com/150/150?random=4','Product 4',new Date(2013,5,20),'2','110' ,' long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'),

    ]

  }

}
