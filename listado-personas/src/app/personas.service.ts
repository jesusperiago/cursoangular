import {Persona} from "./persona.model";
import {LoggingService} from "./LoggingService.service";
import {Injectable} from "@angular/core";

@Injectable()
export class PersonasService {
  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez")];

  constructor(private logginService: LoggingService){}

  agregarPersona(persona: Persona){
    this.logginService.enviaMensajeAConsola("Agregamos persona:" + persona.nombre +" "+ persona.apellido );
    this.personas.push(persona);
  }
}
