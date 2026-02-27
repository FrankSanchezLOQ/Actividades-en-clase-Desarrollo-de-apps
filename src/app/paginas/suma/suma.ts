import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suma',
  standalone: true, //Funciona sin modulo.
  imports: [FormsModule],
  templateUrl: './suma.html',
  styleUrl: './suma.css',
})
export class Suma {
    numero1: number = 0;
    numero2: number = 0;
    resultado: number = 0;

    sumar() {
        this.resultado = this.numero1 + this.numero2;
    }
}
