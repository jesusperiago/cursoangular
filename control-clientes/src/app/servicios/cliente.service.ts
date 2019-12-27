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
  agregarCliente(cliente: ClienteModel){
    this.clientesColeccion.add(cliente);

  }

  getCliente(id: string){
    this.clienteDoc = this.db.doc<ClienteModel>(`clientes/${id}`);
    this.cliente = this.clienteDoc.snapshotChanges().pipe(
      map(
        action => {
          if(action.payload.exists === false){
            return null;
          }else{
            const datos = action.payload.data() as ClienteModel;
            datos.id = action.payload.id;
            return datos;
          }
        }
      )
    );
    return this.cliente;
  }

  modificarCliente(cliente: ClienteModel){
    this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
    this.clienteDoc.update(cliente);
  }

  eliminarCliente(cliente: ClienteModel){
    this.clienteDoc = this.db.doc(`clientes/${cliente.id}`);
    this.clienteDoc.delete();
  }
}
