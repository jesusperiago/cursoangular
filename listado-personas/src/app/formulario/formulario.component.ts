import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Persona} from "../persona.model";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  //nombreInput: string;
  //apellidoInput: string;
  @ViewChild('nombreInput', {static: false}) nombreInput: ElementRef;
  @ViewChild('apellidoInput', {static: false}) apellidoInput: ElementRef;

  constructor() { }
  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value , this.apellidoInput.nativeElement.value);
    this.personaCreada.emit(persona1);
  }
  ngOnInit() {
  }

}
