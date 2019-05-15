import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: any = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clientesService.getClientes() // Esto es un observable
        .subscribe(
          res => {
            this.clientes = (res as any).recordset;
          },
          err => console.error(err)
        );
  }


  deleteCliente(id: string) {
    // console.log(id);
    this.clientesService.deleteCliente(id)
      .subscribe(
        res => {
          console.log(res);
          this.getClientes();
        },
        err => console.log(err)
      );
  }

}
