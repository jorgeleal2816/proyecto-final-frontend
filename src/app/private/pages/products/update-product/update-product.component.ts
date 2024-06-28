import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  product: any;
  id: any

  updateproductForm: FormGroup = this.formBuilder.group({ 
      name: new FormControl( '', [] ),
      description: new FormControl( '', [] ),
      price: new FormControl( 0, [] ),
      urlimagen: new FormControl( '', []),
      quantity: new FormControl( 0, [] ),

  })

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( ( data:any ) => {
      this.id = data.id;

      console.log('ID ', this.id)
      this.productService.getProductById(this.id).subscribe( ( data: any) => {
        console.log( data );

        const productoEncontrado = data.data;

        this.updateproductForm.setValue({
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
    // console.log( this.product.value )
    if(this.updateproductForm.valid){
      console.log(this.updateproductForm.value);
      this.productService.patchProduct(this.id, this.updateproductForm.value).subscribe( (data: any) => {
        console.log (data);

        this.router.navigateByUrl('dashboard/products');
      });
      
    }
  }


}
