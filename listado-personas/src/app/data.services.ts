import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Persona} from "./persona.model";
import {LoginService} from "./login/login.service";

@Injectable()
export class DataServices {

  constructor(private httpClient: HttpClient, private loginService: LoginService) {
  }

  cargarPersonas() {
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listado-personas-4620d.firebaseio.com/datos.json?auth=' + token);
  }

  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient.put('https://listado-personas-4620d.firebaseio.com/datos.json?auth=' + token, personas).subscribe(
      response => console.log("Resultado de guardar las personas" + response),
      error => console.log("Error al guardar personas" + error)
    );
  }

  modificarPersona(index: number, persona: Persona) {
    let url: string;
    const token = this.loginService.getIdToken();
    url = 'https://listado-personas-4620d.firebaseio.com/datos/' + index + ".json?auth=" + token;
    this.httpClient.put(url, persona).subscribe(
      response => console.log("Resultado modificar persona: " + response),
      error => console.log("Error al modificar persona" + error)
    );
  }

  eliminarPersona(index: number) {
    let url: string;
    const token = this.loginService.getIdToken();
    url = 'https://listado-personas-4620d.firebaseio.com/datos/' + index + ".json?auth=" + token;
    this.httpClient.delete(url).subscribe(
      response => console.log("Resultado eliminar persona: " + response),
      error => console.log("Error al eliminar persona" + error)
    );
  }
}
