import { Component } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizarevento',
  templateUrl: './actualizarevento.component.html',
  styleUrl: './actualizarevento.component.css'
})
export class ActualizareventoComponent {

  eventos: any;
  id: any

  actualizareventosForm: FormGroup = this.formBuilder.group({
        name: [ '', [] ],
        description: [ '', [] ],
        price: [ 0, [] ],
        initialDate: [ '', [] ], 
        finalDate: [ '', [] ], 
        imageUrl: [ '', [] ],

  });
  
  constructor( 
    private formBuilder: FormBuilder,
    private actualizareventosService: EventosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  /** Este Ciclo vida ejecuta acciones cuando el componente se esta inicializando */
  ngOnInit() {
    this.activatedRoute.params.subscribe( ( data:any) => {
      this.id = data.id;

      console.log('ID ', this.id)
      this.actualizareventosService.getEventosById(this.id).subscribe( ( data: any) => {
        console.log( data );

        const eventoEncontrado = data.data;

        const fi = new Date( eventoEncontrado.initialDate ).toISOString().split('T')[0]
        const ff = new Date( eventoEncontrado.finalDate ).toISOString().split('T')[0]

        console.log( fi, ff )

        this.actualizareventosForm.setValue({
        name: eventoEncontrado.name,
        description: eventoEncontrado.description,
        price: eventoEncontrado.price,
        initialDate: fi, 
        finalDate: ff, 
        imageUrl: eventoEncontrado.imageUrl,
        });

      });

      });

    }

  onSumbit() {
    if( this.actualizareventosForm.valid ) {
      console.log( this.actualizareventosForm.value );
      this.actualizareventosService.patcheventos( this.id ,this.actualizareventosForm.value ).subscribe( data => {
        console.log( data );

        this.router.navigateByUrl('dashboard/eventos');
      });
    }
  }
}

