import { Cliente } from './../models/Cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Es una interfaz

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(`${this.API_URI}/api/cliente`);
  }

  getCliente(id: string) {
    return this.http.get(`${this.API_URI}/api/cliente/${id}`);
  }

  deleteCliente(id: string) {
    return this.http.delete(`${this.API_URI}/api/cliente/${id}`);
  }

  saveCliente(cliente: Cliente) {
    return this.http.post(`${this.API_URI}/api/cliente`, cliente);
  }

  updateCliente(id: string|number, updatedCliente: Cliente): Observable<Cliente> {
    return this.http.put(`${this.API_URI}/api/cliente/${id}`, updatedCliente);
  }
}
