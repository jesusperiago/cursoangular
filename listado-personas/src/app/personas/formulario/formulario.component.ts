import {Component, OnInit} from '@angular/core';
import {Persona} from "../../persona.model";
import {LoggingService} from "../../LoggingService.service";
import {PersonasService} from "../../personas.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombreInput: string;
  apellidoInput: string;
  indice: number;
  modoEdicion: number;

  constructor(private logginService: LoggingService, private personasService: PersonasService, private router: Router,
              private route: ActivatedRoute) {
  }

  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if (this.modoEdicion != null && this.modoEdicion == 1) {
      this.personasService.modificarPersona(this.indice, persona1);
      console.log(this.modoEdicion);
    } else {
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion == 1) {
      console.log(this.indice);
      this.personasService.eliminarPersona(this.indice);
    }
    this.router.navigate(['personas']);
  }

  ngOnInit() {
    this.indice = this.route.snapshot.params['id'];
    if (this.indice) {
      let persona: Persona = this.personasService.encontrarPersona(this.indice);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

}
