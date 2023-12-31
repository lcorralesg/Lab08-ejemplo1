import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lab08app';
  nombre = 'Corrales Luis';
  edad = 20;
  email = 'luis.corrales@tecsup.edu.pe';
  sueldos = [1700, 1600, 1900];
  activo = true;
  sitio = 'http://www.google.com.pe';
  contador = 1;
  profesion = '';
  anios = '';
  esActivo() {
    if (this.activo) 
       return 'Trabajador Activo';
     else 
       return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++)
      suma += this.sueldos[x];
    return suma;
  }
  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
}
