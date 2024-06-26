import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

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

  onDelete(id: any) {
    this.productsService.DeleteProductById(id).subscribe( data => {
      console.log(data);
      this.loadData();
    });
  }

}

