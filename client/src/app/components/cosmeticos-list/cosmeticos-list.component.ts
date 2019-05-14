import { CosmeticosService } from './../../services/cosmeticos.service';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-cosmeticos-list',
  templateUrl: './cosmeticos-list.component.html',
  styleUrls: ['./cosmeticos-list.component.css']
})
export class CosmeticosListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  cosmeticos: any = [];
  articulo_imagen: string = 'https://www.medallia.com/wp-content/uploads/2019/02/leverage-icon-retail@2x.png';

  constructor(private cosmeticosService: CosmeticosService) { }

  ngOnInit() {
    this.getCosmeticos();
  }

  getCosmeticos() {
    this.cosmeticosService.getCosmeticos() // Esto es un observable
        .subscribe(
          res => {
            this.cosmeticos = res.recordset;
          },
          err => console.error(err)
        );
  }


  deleteCosmetico(id: string) {
    // console.log(id);
    this.cosmeticosService.deleteCosmetico(id)
      .subscribe(
        res => {
          console.log(res);
          this.getCosmeticos();
        },
        err => console.log(err)
      );
  }

}
