import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private httpclient:HttpClient) { }

  getEventos() {
    return this.httpclient.get<any>("http://localhost:4001/api/eventos")
  }

  postNeweventos(evento:any) {
    return this.httpclient.post<any>("http://localhost:4001/api/eventos", evento)
  }

  patcheventos(id: string, evento: any) {
    return this.httpclient.patch<any>(`http://localhost:4001/api/eventos/${id}`, evento)
  }

  deleteeventos(id: any ) {
    return this.httpclient.delete<any>(`http://localhost:4001/api/eventos/${id}`)
  }
  
}
