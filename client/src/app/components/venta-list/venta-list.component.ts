import { Component, OnInit, HostBinding } from '@angular/core';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-venta-list',
  templateUrl: './venta-list.component.html',
  styleUrls: ['./venta-list.component.css']
})
export class VentaListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  ventas: any = [];
  datoTraido: any;

  constructor(private ventasService: VentasService) { }

  ngOnInit() {
    this.getVentas();
  }

  getVentas() {
    this.ventasService.getVentas() // Esto es un observable
        .subscribe(
          res => {
            this.ventas = res.recordset;
            console.log(res);
          },
          err => console.error(err)
        );
  }

}
