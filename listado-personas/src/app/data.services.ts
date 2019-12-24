import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Persona} from "./persona.model";

@Injectable()
export class DataServices {

  constructor(private httpClient: HttpClient) {
  }

  guardarPersonas(personas: Persona[]) {
    this.httpClient.put('https://listado-personas-4620d.firebaseio.com/datos.json', personas).subscribe(
      response => console.log("Resultado de guardar las personas" + response),
      error => console.log("Error al guardar personas" + error)
    );
  }
}
