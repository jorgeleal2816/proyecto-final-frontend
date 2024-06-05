import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {
      "name": "APPLE MacBook Air Chip M1 CPU 8 Núcleos GPU",
      "price": 1900,
      "quantity": 2,
      "category": "Tech",
      "urlImage": "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/17861770_0/w=800,h=800"
    },
    {
      "name": "Televisor JVC 43 pulgadas LED Full HD Smart TV",
      "price": 1200,
      "quantity": 12,
      "category": "Tech",
      "urlImage": "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/69061669_1/w=1500,h=1500"
    },
    {
      "name": "Televisor JVC 43 pulgadas LED Full HD Smart TV",
      "price": 1200,
      "quantity": 12,
      "category": "Tech",
      "urlImage": "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/69061669_1/w=1500,h=1500"
    }
  ];

  constructor() { }

  getProducts() {

    return this.products;
  }
}
