import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea',
  standalone: true, //Funciona sin modulo.
  imports: [CommonModule,FormsModule],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {
    nuevaTarea: string = '';
    listaTareas: string[] = [];

    agregarTarea() {
      const texto = this.nuevaTarea.trim();

        if (texto !== '') {
            this.listaTareas.push(texto);
            this.nuevaTarea = '';
        } else {
            alert('Por favor, escribe una tarea antes de agregar.');
        }
    }
}
