import {EgresoModel} from "./egreso.model";

export class EgresoService{
  egreso: EgresoModel[] = [
    new EgresoModel("Renta depto", 900),
    new EgresoModel("Ropa", 200)
  ];

  eliminarEgreso(egreso:EgresoModel){
    const indice:number = this.egreso.indexOf(egreso);
    this.egreso.splice(indice,1);
  }
}
