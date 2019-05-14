import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from './../../models/Cliente';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  edit = false;

  cliente: Cliente = {
    dni: 0,
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    profesion: '',
    telefono: '',
    calle: '',
    colonia: '',
    numero_casa: '',
    tratamientos_medicos: ''
  }; // Sirve para la previsualizacion

  constructor(private clientesService: ClientesService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    // Checar si existe un parametro en la ruta (se quiere editar)
    const params = this.activatedroute.snapshot.params;
    if(params.id){
      this.clientesService.getCliente(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.cliente = res.recordset[0];
            this.edit = true;
          },
          err => console.log(err)
        );
    }
  }

  saveNewCliente() {
    // Eiminamos este dato porque los genera la base de datos
    delete this.cliente.dni;
    this.clientesService.saveCliente(this.cliente)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/clientes']);
        },
        err => console.error(err)
      );
  }

  updateCliente() {
    this.clientesService.updateCliente(this.cliente.dni, this.cliente)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/clientes']);
        },
        err => console.error(err)
      );
  }

}
