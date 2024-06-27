import { Component, OnInit } from '@angular/core';
import { LocalidadesService } from '../../../private/services/localidades.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  /** Atributos o propiedades (estas son las que se hacen publicas a nuestro HTML) */
  // products (nombre de nuestro atributo) : Tipo (any) = Lista vacia
  localidades: any[] = [];

  /** Inyectar una dependencia (hacerla disponible) usando el constructor de la clase del componente */
  constructor( private localidadesService: LocalidadesService ) {}


  ngOnInit() {
    /** Ejecuta el servicio disponible para obtener los datos */
  }

  ngOnDestroy() {

  }

}
