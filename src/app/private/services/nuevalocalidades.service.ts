import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class nuevalocalidadService {

  constructor(private httpclient:HttpClient) { }

  postNuevalocalidad(localidad:any) {

    return this.httpclient.post<any>("http://localhost:3001/api/localidades",localidad);
  }
}


