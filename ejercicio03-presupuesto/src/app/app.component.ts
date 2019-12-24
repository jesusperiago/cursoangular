import { Component } from '@angular/core';
import {IngresoModel} from "./ingresos/ingreso.model";
import {EgresoModel} from "./egresos/egreso.model";
import {IngresoService} from "./ingresos/ingreso.service";
import {EgresoService} from "./egresos/egreso.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingresos:IngresoModel[]=[];
  egresos:EgresoModel[]=[];

  constructor(private ingresoService:IngresoService, private egresoService:EgresoService){
    this.ingresos = ingresoService.ingresos;
    this.egresos= egresoService.egreso;
  }

  getIngresoTotal(){
    let ingresoTotal:number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPocentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
