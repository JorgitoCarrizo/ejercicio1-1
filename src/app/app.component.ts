import { NumberSymbol } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio1';

  numero1:number = 0;
  numero2:number = 0;
  rta:number=0;
  calcular()
  {
    this.rta = (this.numero1 + this.numero2) /2
  }
  limpiar()
  {
      this.rta = 0;
      this.numero2=0;
      this.numero1=0;
  }

}
