import {Component, OnInit} from '@angular/core';
import {Persona} from "../persona.model";
import {LoggingService} from "../LoggingService.service";
import {PersonasService} from "../personas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];


  /* onPersonaAgregada(persona: Persona){
     //this.logginService.enviaMensajeAConsola("Mensaje desde app.component");
     //this.personas.push(persona);
     this.personasService.agregarPersona(persona);
   }
 */
  constructor(private logginService: LoggingService, private personasService: PersonasService, private router: Router) {
  }

  ngOnInit(): void {
    this.personasService.obternerPersonas().subscribe(
      (personas: Persona[]) => {
        this.personas = personas;
        this.personasService.setPersonas(personas);
      }
    )
  }

  agregar() {
    this.router.navigate(['personas/agregar']);
  }


}
