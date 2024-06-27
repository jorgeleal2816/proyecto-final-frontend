import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProduct() {
    return this.httpClient.get<any>('http://localhost:3007/api/productos');
  }

  createProduct(product: any) {
    return this.httpClient.post<any>(
      'http://localhost:3007/api/productos',
      product
    );
  }

  patchProduct(id: string, product: any) {
    return this.httpClient.patch<any>(
      `http://localhost:3007/api/productos/${id}`,
      product
    );
  }

  getProductById(id: any) {
    return this.httpClient.get(`http://localhost:3007/api/productos/${id}`);
  }

  DeleteProductById(id: any) {
    return this.httpClient.delete(`http://localhost:3007/api/productos/${id}`);
  }
}
