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
            this.citas = res.recordset;
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

  setDate(unixTime: number) {
    let d = new Date();
    d.setTime(unixTime * 1000);
    let dformat = [d.getDate(),
      d.getMonth()+1,
      d.getFullYear()].join('/')+' '+
     [d.getHours(),
      d.getMinutes()].join(':');
    return dformat;
  }

}
