import { Router, ActivatedRoute } from '@angular/router';
import { CitasService } from './../../services/citas.service';
import { Cita } from './../../models/Cita';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.css']
})
export class CitaFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  edit = false;
  actualDate = new Date();
  cita: Cita = {
    id: 0,
    fecha_hora: null,
    dni_cliente: 0,
    dni_empleado: 0
  }; // Sirve para la previsualizacion

  constructor(private citasService: CitasService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    // Checar si existe un parametro en la ruta (se quiere editar)
    const params = this.activatedroute.snapshot.params;
    if(params.id){
      console.log('si toma los parametros');
      this.citasService.getCita(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.cita = res.recordset[0];
            this.edit = true;
          },
          err => console.log(err)
        );
    } else{
      console.log('No toma los parametros');
    }
  }

  saveNewCita() {
    // Eiminamos estos datos porque los genera la base de datos
    delete this.cita.id;
    const date = this.cita.fecha_hora.getUTCFullYear() + '-' +
    ('00' + (this.cita.fecha_hora.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + this.cita.fecha_hora.getUTCDate()).slice(-2) + ' ' +
    ('00' + this.cita.fecha_hora.getUTCHours()).slice(-2) + ':' +
    ('00' + this.cita.fecha_hora.getUTCMinutes()).slice(-2) + ':' +
    ('00' + this.cita.fecha_hora.getUTCSeconds()).slice(-2);
    this.cita.fecha_hora = date;
    this.citasService.saveCita(this.cita)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/principal']);
        },
        err => console.error(err)
      );
  }

  /*
  Agarro la date con un date picker.
  Lo convierto a timestamp

  si no se puede, primero pasar la date a un unix_timestamp
  */

  updateCita() {
    this.citasService.updateCita(this.cita.id, this.cita)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/principal']);
        },
        err => console.error(err)
      );
  }

}
