import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {ClienteModel} from "../modelo/cliente.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class ClienteService {
  clientesColeccion: AngularFirestoreCollection<ClienteModel>;
  clienteDoc: AngularFirestoreDocument<ClienteModel>;
  clientes: Observable<ClienteModel[]>;
  cliente: Observable<ClienteModel>;

  constructor(private db: AngularFirestore) {
    this.clientesColeccion = db.collection('clientes', ref => ref.orderBy('nombre', 'asc'));
  }

  getClientes(): Observable<ClienteModel[]>{
    this.clientes = this.clientesColeccion.snapshotChanges().pipe(
      map( cambios => {
        return cambios.map(accion => {
          const datos = accion.payload.doc.data() as ClienteModel;
          datos.id = accion.payload.doc.id;
          return datos;
        })
      })
    );
    return this.clientes;
  }
}
