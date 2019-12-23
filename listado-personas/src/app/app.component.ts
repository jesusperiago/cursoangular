import { Component } from '@angular/core';
import { Persona } from "./persona.model";
import {LoggingService} from "./LoggingService.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de personas';
  personas: Persona[] = [new Persona("Juan", "Perez"), new Persona("Laura", "Juarez")];

  onPersonaAgregada(persona: Persona){
    this.logginService.enviaMensajeAConsola("Mensaje desde app.component");
    this.personas.push(persona);
  }

  constructor(private logginService: LoggingService){}

}
