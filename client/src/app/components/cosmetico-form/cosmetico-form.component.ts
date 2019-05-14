import { CosmeticosService } from './../../services/cosmeticos.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cosmetico } from '../../models/Cosmetico';

@Component({
  selector: 'app-cosmetico-form',
  templateUrl: './cosmetico-form.component.html',
  styleUrls: ['./cosmetico-form.component.css']
})
export class CosmeticoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  edit = false;

  cosmetico: Cosmetico = {
    codigo: 0,
    nombre: '',
    cantidad: 0,
    PRECIO: 0
  }; // Sirve para la previsualizacion

  constructor(private cosmeticosService: CosmeticosService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    // Checar si existe un parametro en la ruta (se quiere editar)
    const params = this.activatedroute.snapshot.params;
    if(params.id){
      console.log('si toma los parametros');
      this.cosmeticosService.getCosmetico(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.cosmetico = res.recordset[0];
            this.edit = true;
          },
          err => console.log(err)
        );
    } else{
      console.log('No toma los parametros');
    }
  }

  saveNewCosmetico() {
    // Eiminamos estos datos porque los genera la base de datos
    delete this.cosmetico.codigo;
    this.cosmeticosService.saveCosmetico(this.cosmetico)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/cosmeticos']);
        },
        err => console.error(err)
      );
  }

  updateCosmetico() {
    this.cosmeticosService.updateCosmetico(this.cosmetico.codigo, this.cosmetico)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/cosmeticos']);
        },
        err => console.error(err)
      );
  }

}
