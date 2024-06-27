import { Component } from '@angular/core';
import { LocalidadesService } from '../../services/localidades.service';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrl: './localidades.component.css'
})
export class LocalidadesComponent {
  localidades:any
  constructor(private lservice: LocalidadesService) {}

  ngOnInit(){
    this.loadData()

  }

  loadData() {
    this.lservice.getlocalidades().subscribe(datos => {
      console.log ('::::::::',datos)
      this.localidades= datos.data
    })
  }
  

onDelete(id: any) {
  this.lservice.DeletelocalidadById(id).subscribe( data => {
    console.log(data);
    this.loadData();
  })
}
}