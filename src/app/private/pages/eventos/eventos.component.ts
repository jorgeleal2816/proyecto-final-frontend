import { Component } from '@angular/core';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

  eventos:any

  constructor(private eventosServices: EventosService ){

  }

  ngOnInit(){
    this.loadData()
  }

  loadData(){
    this.eventosServices.getEventos().subscribe(data=> {
      console.log(data)
      this.eventos = data.data
    } )
  }

  onDelete(id: any ){
    this.eventosServices.deleteeventos(id).subscribe(data => {
      console.log(data);
      this.loadData();
    })
  }

}


