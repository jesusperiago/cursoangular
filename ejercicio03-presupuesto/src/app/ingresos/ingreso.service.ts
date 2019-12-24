import {IngresoModel} from "./ingreso.model";

export class IngresoService{
  ingresos:IngresoModel[] = [
    new IngresoModel("Salario", 4000),
    new IngresoModel("Venta coche", 500)
  ];
  eliminar(ingreso:IngresoModel){
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
  }
}
