import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getVentas() {
    return this.http.get(`${this.API_URI}/api/venta`);
  }

  getVenta(id: string) {
    return this.http.get(`${this.API_URI}/api/venta/${id}`);
  }
}
