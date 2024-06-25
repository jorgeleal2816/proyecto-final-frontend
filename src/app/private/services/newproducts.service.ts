import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ({
  providedIn: 'root'
})
export class NewProductServices {

  constructor(private httpClient:HttpClient) {}

  getProduct() {
   return this.httpClient.get<any>("http://localhost:3007/api/productos")
  
  }

  createProduct(product: any) {
    return this.httpClient.post<any>("http://localhost:3007/api/productos", product)
   
   }


  }
