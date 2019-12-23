import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de calculadora';
  resultado: number;

  onResultado(res: number){
    this.resultado = res;
  }

}
