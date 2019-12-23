import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Persona} from "../persona.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  nombreInput: string;
  apellidoInput: string;
  constructor() { }
  onAgregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement){
    let persona1 = new Persona(nombreInput.value, apellidoInput.value);
    this.personaCreada.emit(persona1);
  }
  ngOnInit() {
  }

}
