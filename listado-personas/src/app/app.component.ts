import {Component, OnInit} from '@angular/core';
// @ts-ignore
import * as firebase from 'firebase';
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de personas';

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "apikey",
      authDomain: "domain"
    })
  }

  isAutenticado() {
    return this.loginService.ifAutenticado();
  }

  salir() {
    this.loginService.logout();
  }

}
