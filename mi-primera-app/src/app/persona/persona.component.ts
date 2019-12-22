import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  nombrePersona: string = "Juan";
  apellidoPersona: string = "Perez";
  edad: number = 28;

  constructor() { }

  ngOnInit() {
  }

}
