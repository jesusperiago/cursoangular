import { Component, OnInit } from '@angular/core';
import {IngresoService} from "../ingresos/ingreso.service";
import {EgresoService} from "../egresos/egreso.service";
import {IngresoModel} from "../ingresos/ingreso.model";
import {EgresoModel} from "../egresos/egreso.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ingresoOperacion";
  descripcionInput:string;
  valorInput:number;

  constructor(private ingresoService:IngresoService, private egresoService:EgresoService) { }

  ngOnInit() {
  }
  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if (this.tipo === "ingresoOperacion"){
      this.ingresoService.ingresos.push(new IngresoModel(this.descripcionInput, this.valorInput));
    }else{
      this.egresoService.egreso.push(new EgresoModel(this.descripcionInput, this.valorInput));
    }
  }
}
