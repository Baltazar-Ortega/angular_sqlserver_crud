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
            this.servicios = res.recordset;
          },
          err => console.error(err)
        );
  }

  setDate(unixTime: number) {
    let d = new Date();
    d.setTime(unixTime * 1000);
    let dformat = [d.getDate(),
      d.getMonth()+1,
      d.getFullYear()].join('/')+'    Hora: '+
     [d.getHours(),
      d.getMinutes()].join(':');
    return dformat;
  }

}
