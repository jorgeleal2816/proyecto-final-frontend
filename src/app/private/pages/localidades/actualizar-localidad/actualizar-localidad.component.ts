import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalidadesService } from '../../../services/localidades.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-localidad',
  templateUrl: './actualizar-localidad.component.html',
  styleUrl: './actualizar-localidad.component.css'
})
export class ActualizarLocalidadComponent {
 localicalidad:any;
 id :any

  actualizarlocalidadesForm: FormGroup = this.formBuilder.group({
   
    nombre: [ '', [ Validators.required, Validators.minLength( 5 ) ] ],
    urlImagen: [ '', [] ],
   
    
  });

  constructor( 
    private formBuilder: FormBuilder,
    private actualizarlocalidadesService: LocalidadesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

 
  ngOnInit() {
    this.activatedRoute.params.subscribe((data:any)=>{
      this.id = data.id;

      console.log('ID: ',this.id)
      this.actualizarlocalidadesService.getLocalidadById(this.id).subscribe( data => {
        console.log( '>>>>>>>', data )

        const localidadEncontrada = data.data;

        this.actualizarlocalidadesForm.setValue({
          nombre: localidadEncontrada?.nombre,
          urlImagen: localidadEncontrada?.urlImagen ? localidadEncontrada?.urlImagen : ''
        })
      } );
    })
    
  }

  onSumbit() {
    if( this.actualizarlocalidadesForm.valid ) {
      console.log( this.actualizarlocalidadesForm.value );
      this.actualizarlocalidadesService.patchactualizarlocalidades(this.id, this.actualizarlocalidadesForm.value ).subscribe( data => {
        console.log( data );

        this.router.navigateByUrl( '/dashboard/localidades' );
      
      });
    }
  }

}
