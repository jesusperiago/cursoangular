import { Component, OnInit } from '@angular/core';
import {IngresoModel} from "./ingreso.model";
import {IngresoService} from "./ingreso.service";

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingresos:IngresoModel[] = [];
  constructor(private ingresoService:IngresoService) { }

  ngOnInit() {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarRegistro(ingreso:IngresoModel){
    this.ingresoService.eliminar(ingreso);
  }
}
