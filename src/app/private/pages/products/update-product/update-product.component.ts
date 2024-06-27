import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { ProductsService } from '../../../services/products.service';



@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {

  product: any;
  id: any

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.product = new FormGroup({
      name: new FormControl( '', [] ),
      description: new FormControl( '', [] ),
      price: new FormControl( 0, [] ),
      urlimagen: new FormControl( '', []),
      quantity: new FormControl( 0, [] ),
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( ( data:any ) => {
      this.id = data.id;

      this.productService.getProductById(this.id).subscribe( ( data: any) => {
        console.log( data );

        const productoEncontrado = data.data;

        this.product.setValue({
          name: productoEncontrado.name,
          description: productoEncontrado.description,
          price: productoEncontrado.price,
          urlimagen: productoEncontrado.urlimagen,
          quantity: productoEncontrado.quantity
        });
      });

    });
  }

  onSumbit() {
    console.log( this.product.value )
    if(this.product.valid){
      console.log(this.product.value);
      this.product.patchproduct(this.id, this.product.value).subscribe( (data: any) => {
        console.log (data);
      });
      
    }
  }


}
