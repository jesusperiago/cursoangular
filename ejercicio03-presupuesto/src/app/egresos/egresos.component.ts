import {Component, Input, OnInit} from '@angular/core';
import {EgresoModel} from "./egreso.model";
import {EgresoService} from "./egreso.service";

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos:EgresoModel[]= [];
  @Input() ingresoTotal: number;

  constructor(private egresoService:EgresoService) { }

  ngOnInit() {
    this.egresos = this.egresoService.egreso;
  }

  eliminarEgreso(egreso:EgresoModel){
    this.egresoService.eliminarEgreso(egreso);
  }

  calcularPorcentaje(egreso:EgresoModel){
    return egreso.valor/this.ingresoTotal;
  }
}
