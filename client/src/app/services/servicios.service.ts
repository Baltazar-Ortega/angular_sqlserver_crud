import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getServicios() {
    return this.http.get(`${this.API_URI}/api/servicio`);
  }

  getServicio(id: string) {
    return this.http.get(`${this.API_URI}/api/servicio/${id}`);
  }


}
