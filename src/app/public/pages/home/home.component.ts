import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../private/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  localidades: any[] = [];
  products:any

  constructor(private productsService: ProductsService ) { }

  ngOnInit(){
    this.loadData()
  }

  loadData() {
    this.productsService.getProduct().subscribe(data=> {
      console.log(data)
      this.products = data.data
    })

  }
  
}
