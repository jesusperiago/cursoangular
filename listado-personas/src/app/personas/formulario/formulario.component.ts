import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
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
  indice:number;

  constructor(private logginService:LoggingService, private personasService:PersonasService, private router:Router,
              private route:ActivatedRoute) {}

  onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.indice){
      this.personasService.modificarPersona(this.indice, persona1);
    }else{
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.indice != null){
      this.personasService.eliminarPersona(this.indice);
    }
    this.router.navigate(['personas']);
  }

  ngOnInit() {
    this.indice = this.route.snapshot.params['id'];
    if(this.indice){
      let persona: Persona = this.personasService.encontrarPersona(this.indice);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

}
