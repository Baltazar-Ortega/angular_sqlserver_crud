import { CitasService } from './../../services/citas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  citas: any = [];

  constructor(private citasService: CitasService) { }

  ngOnInit() {
    this.getCitas();
  }

  getCitas() {
    this.citasService.getCitas() // Esto es un observable
        .subscribe(
          res => {
            this.citas = (res as any).recordset;
          },
          err => console.error(err)
        );
  }


  deleteCita(id: string) {
    // console.log(id);
    this.citasService.deleteCita(id)
      .subscribe(
        res => {
          console.log(res);
          this.getCitas();
        },
        err => console.log(err)
      );
  }

  setDate(fecha: string) {
    let principalDate = new Date(fecha);
    let mes: string = '';
    switch(principalDate.getMonth()){
              case 1: mes = 'enero';
              break;
              case 2: mes = 'febrero';
              break;
              case 3: mes = 'marzo';
              break;
              case 4: mes = 'abril';
              break;
              case 5: mes = 'mayo';
              break;
              case 6: mes = 'junio';
              break;
              case 7: mes = 'julio';
              break;
              case 8: mes = 'agosto';
              break;
              case 9: mes = 'septiembre';
              break;
              case 10: mes = 'octubre';
              break;
              case 11: mes = 'noviembre';
              break;
              case 12: mes = 'diciembre';
              break;
              default: mes = 'indefinido';
              break;
    }
    return ` ${principalDate.getDate()}/${mes}
      ${principalDate.getHours()}:${principalDate.getMinutes()}`;
  }

}
