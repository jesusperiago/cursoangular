import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Persona} from "../persona.model";
import {LoggingService} from "../LoggingService.service";

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

  constructor(private logginService:LoggingService) { }
  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value , this.apellidoInput.nativeElement.value);
    this.logginService.enviaMensajeAConsola("Enviamos persona:" + persona1.nombre + " " + persona1.apellido);
    this.personaCreada.emit(persona1);
  }
  ngOnInit() {
  }

}
