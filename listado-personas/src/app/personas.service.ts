import {Persona} from "./persona.model";
import {LoggingService} from "./LoggingService.service";
import {EventEmitter, Injectable} from "@angular/core";
import {DataServices} from "./data.services";

@Injectable()
export class PersonasService {
  personas: Persona[] = [];
  saludar = new EventEmitter<number>();

  constructor(private logginService: LoggingService, private dataService: DataServices) {
  }

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  agregarPersona(persona: Persona) {
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataService.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number) {
    return this.personas[index];
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataService.modificarPersona(index, persona);
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataService.eliminarPersona(index);
    this.modificarPersonas();
  }

  obternerPersonas() {
    return this.dataService.cargarPersonas();
  }

  modificarPersonas() {
    if(this.personas != null) {
      this.dataService.guardarPersonas(this.personas);
    }
  }
}
