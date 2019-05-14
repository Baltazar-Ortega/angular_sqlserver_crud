import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from './../models/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCitas() {
    return this.http.get(`${this.API_URI}/api/cita`);
  }

  getCita(id: string) {
    return this.http.get(`${this.API_URI}/api/cita/${id}`);
  }

  deleteCita(id: string) {
    return this.http.delete(`${this.API_URI}/api/cita/${id}`);
  }

  saveCita(cita: Cita) {
    return this.http.post(`${this.API_URI}/api/cita`, cita);
  }

  updateCita(id: string|number, updatedCita: Cita): Observable<Cita> {
    return this.http.put(`${this.API_URI}/api/cita/${id}`, updatedCita);
  }
}
