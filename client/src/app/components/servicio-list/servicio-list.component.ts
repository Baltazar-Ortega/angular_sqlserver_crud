import { ServiciosService } from './../../services/servicios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {

  servicios: any = [];
  datoTraido: any;

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit() {
    this.getServicios();
  }

  getServicios() {
    this.serviciosService.getServicios() // Esto es un observable
        .subscribe(
          res => {
            this.servicios = (res as any).recordset;
          },
          err => console.error(err)
        );
  }

  setDate(fecha: string) {
    const principalDate = new Date(fecha);
    let mes = '';
    switch (principalDate.getMonth()) {
              case 1: mes = 'Enero';
                      break;
              case 2: mes = 'Febrero';
                      break;
              case 3: mes = 'Marzo';
                      break;
              case 4: mes = 'Abril';
                      break;
              case 5: mes = 'Mayo';
                      break;
              case 6: mes = 'Junio';
                      break;
              case 7: mes = 'Julio';
                      break;
              case 8: mes = 'Agosto';
                      break;
              case 9: mes = 'Septiembre';
                      break;
              case 10: mes = 'Octubre';
                       break;
              case 11: mes = 'Noviembre';
                       break;
              case 12: mes = 'Diciembre';
                       break;
              default: mes = 'Indefinido';
                       break;
    }
    return ` ${principalDate.getDate()}/${mes}
          ${principalDate.getHours()}:${principalDate.getMinutes()}`;
  }

}
