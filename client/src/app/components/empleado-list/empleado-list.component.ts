import { EmpleadosService } from './../../services/empleados.service';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  empleados: any = [];
  empleado_imagen: string = 'data:image/png;base64,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';

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit() {
    this.getEmpleados();
  }

  getEmpleados() {
    this.empleadosService.getEmpleados() // Esto es un observable
        .subscribe(
          res => {
            console.log('recordset empleados', res);
            this.empleados = res.recordset;
          },
          err => console.error(err)
        );
  }


  deleteEmpleado(id: string) {
    // console.log(id);
    this.empleadosService.deleteEmpleado(id)
      .subscribe(
        res => {
          console.log(res);
          this.getEmpleados();
        },
        err => console.log(err)
      );
  }

}
