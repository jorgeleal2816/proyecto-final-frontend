import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewProductServices } from '../../../services/newproducts.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {

  newProduct:any

  constructor(
    private formBuilder: FormBuilder,
    private newproductServices: NewProductServices ){
      this.newProduct = new FormGroup({
        name: new FormControl( '', [] ),
        description: new FormControl( '', [] ),
        price: new FormControl( 0, [] ),
        urlimagen: new FormControl( '', []),
        quantity: new FormControl( 0, [] ),
        
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
      this.newproductServices.createProduct(this.newProduct.value).subscribe((data) => {
        console.log(data)
      })

    }
             }
  }