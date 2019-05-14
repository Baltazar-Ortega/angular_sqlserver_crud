import { Cosmetico } from './../models/Cosmetico';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Es una interfaz

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CosmeticosService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCosmeticos() {
    return this.http.get(`${this.API_URI}/api/cosmetico`);
  }

  getCosmetico(id: string) {
    return this.http.get(`${this.API_URI}/api/cosmetico/${id}`);
  }

  deleteCosmetico(id: string) {
    return this.http.delete(`${this.API_URI}/api/cosmetico/${id}`);
  }

  saveCosmetico(cosmetico: Cosmetico) {
    return this.http.post(`${this.API_URI}/api/cosmetico`, cosmetico);
  }

  updateCosmetico(id: string|number, updatedCosmetico: Cosmetico): Observable<Cosmetico> {
    return this.http.put(`${this.API_URI}/api/cosmetico/${id}`, updatedCosmetico);
  }
}
