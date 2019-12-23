import {Component, ElementRef,  OnInit, ViewChild} from '@angular/core';
import {Persona} from "../persona.model";
import {LoggingService} from "../LoggingService.service";
import {PersonasService} from "../personas.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //@Output() personaCreada = new EventEmitter<Persona>();
  //nombreInput: string;
  //apellidoInput: string;
  @ViewChild('nombreInput', {static: false}) nombreInput: ElementRef;
  @ViewChild('apellidoInput', {static: false}) apellidoInput: ElementRef;

  constructor(private logginService:LoggingService, private personasService:PersonasService) {
    this.personasService.saludar.subscribe(
      (indice:number) => alert("El indice es: " + indice)
    );
  }
  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value , this.apellidoInput.nativeElement.value);
    //this.logginService.enviaMensajeAConsola("Enviamos persona:" + persona1.nombre + " " + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }
  ngOnInit() {
  }

}
