import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { EventosService } from '../../../services/eventos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newevents',
  templateUrl: './newevents.component.html',
  styleUrl: './newevents.component.css'
})
export class NeweventsComponent {

  neweventos:any

  constructor(
    private neweventosServices: EventosService,
    private activatedRoute: ActivatedRoute,
    private router: Router )
    {
      this.neweventos = new FormGroup({
        name: new FormControl( '', [] ),
        description: new FormControl( '', [] ),
        price: new FormControl( 0, [] ),
        initialDate: new FormControl( '', [] ), 
        finalDate: new FormControl( '', [] ), 
        imageUrl: new FormControl( '', [] ),
      })
    }

  ngOnInit(){
    // this.neweventosServices.postNeweventos().subscribe(data=> {
    //   this.neweventos = data.data
    // } )
  }
  onSumbit() {
    if( this.neweventos.valid ) {
      console.log( this.neweventos.value );
      this.neweventosServices.postNeweventos(this.neweventos.value).subscribe(data=>{
        console.log(data)

        this.router.navigateByUrl('dashboard/eventos');
      })

    }


             }
  }