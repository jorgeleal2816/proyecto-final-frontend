import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {

  newProduct: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router){
      
      this.newProduct = this.formBuilder.group({
        name: ['', [Validators.required]],
        description: ['', []],
        price: ['', []],
        urlImagen: ['', []],
        quantity: ['', []]
      })
    }

  ngOnInit(){
    // this.neweventosServices.postNeweventos().subscribe(data=> {
    //   this.neweventos = data.data
    // } )
  }
  onSumbit() {
    if( this.newProduct.valid ) {
      console.log( this.newProduct.value );
      this.productService.createProduct(this.newProduct.value).subscribe((data) => {
        console.log(data)

        this.router.navigateByUrl('dashboard/products');
      })

    }
             }
  }