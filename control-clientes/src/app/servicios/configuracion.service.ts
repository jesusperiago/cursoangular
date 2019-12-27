import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {ConfiguracionModel} from "../modelo/configuracion.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ConfiguracionService{
  configuracionDoc: AngularFirestoreDocument<ConfiguracionModel>;
  configuracion: Observable<ConfiguracionModel>;
  id= '1';

  constructor(private db: AngularFirestore){}

  getConfiguracion(): Observable<ConfiguracionModel>{
    this.configuracionDoc = this.db.doc<ConfiguracionModel>(`configuracion/${this.id}`);
    this.configuracion = this.configuracionDoc.valueChanges();
    return this.configuracion;
  }

  modificarConfiguracion(configuracion: ConfiguracionModel){
    this.configuracionDoc = this.db.doc<ConfiguracionModel>(`configuracion/${this.id}`);
    this.configuracionDoc.update(configuracion);
  }
}
