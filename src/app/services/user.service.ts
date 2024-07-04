import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(userId: string) {
    return this.http.get<any>(`http://localhost:3001/api/usuarios/${userId}`)
  }

  getUsers() {
    return this.http.get<any>(`http://localhost:3001/api/usuarios`)
  }

  login(data: any) {
    return this.http.post<any>(`http://localhost:3001/api/usuarios/login`, data)
  }
}
