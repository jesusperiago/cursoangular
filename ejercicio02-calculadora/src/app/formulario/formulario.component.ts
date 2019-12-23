import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  operadorA: number;
  operadorB: number;

  @Output() resultado = new EventEmitter<number>();

  onSumar(){
    let res = this.operadorA + this.operadorB;
    this.resultado.emit(res);
  }

  constructor() { }

  ngOnInit() {
  }

}
