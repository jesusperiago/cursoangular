import {Persona} from "./persona.model";
import {LoggingService} from "./LoggingService.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class PersonasService {
  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez")];
  saludar = new EventEmitter<number>();

  constructor(private logginService: LoggingService){}

  agregarPersona(persona: Persona){
    this.personas.push(persona);
  }

  encontrarPersona(index:number){
    return this.personas[index];
  }
  modificarPersona(index:number, persona:Persona){
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index:number){
    this.personas.splice(index, 1);
  }
}
