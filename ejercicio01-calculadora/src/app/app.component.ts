import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de calculadora';
  operadorA: number;
  operadorB: number;
  resultado: number;

  onSumar(){
    this.resultado = this.operadorA + this.operadorB;
  }

}
