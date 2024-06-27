import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  constructor(private httpclient: HttpClient) { }

  getlocalidades() {

    return this.httpclient.get<any>("http://localhost:3000/api/localidades");
  }

  getLocalidadById(id: any) {
    return this.httpclient.get<any>(`http://localhost:3000/api/localidades/${id}`);
  }

  postNuevalocalidad(localidad:any) {

    return this.httpclient.post<any>("http://localhost:3000/api/localidades",localidad);
  }

  patchactualizarlocalidades(id:string, localidad:any) {

    return this.httpclient.patch<any>(`http://localhost:3000/api/localidades/${id}`, localidad);
  }
  
  DeletelocalidadById(id: any) {
    return this.httpclient.delete<any>(`http://localhost:3001/api/localidades/${id}`);
  }
  
}
