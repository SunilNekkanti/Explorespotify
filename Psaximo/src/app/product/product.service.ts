import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts() : string[] {

    return ["Angular 2", "Typescript", "React"];

  };

}
