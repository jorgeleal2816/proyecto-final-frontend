import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    
    
  ];

  constructor() { }

  getProducts() {

    return this.products;
  }
}
