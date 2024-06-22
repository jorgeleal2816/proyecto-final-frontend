import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { nuevalocalidadService } from '../../../services/nuevalocalidades.service';

@Component({
  selector: 'app-nueva-localidad',
  templateUrl: './nueva-localidad.component.html',
  styleUrl: './nueva-localidad.component.css'
})
export class NuevaLocalidadComponent {

  nuevalocalidad:any


  constructor(private NuevalocalidadService: nuevalocalidadService ){
      this.nuevalocalidad = new FormGroup({
        nombre: new FormControl( '', [] ),
        urlImagen: new FormControl( '', [] ),
       
        
      })
    }

  ngOnInit(){
    // this.neweventosServices.postNeweventos().subscribe(data=> {
    //   this.neweventos = data.data
    // } )
  }
  onSumbit() {
    if( this.nuevalocalidad.valid ) {
      console.log( this.nuevalocalidad.value );
      this.NuevalocalidadService.postNuevalocalidad(this.nuevalocalidad.value).subscribe(data=>{
        console.log(data)
      })

    }


             }
  }