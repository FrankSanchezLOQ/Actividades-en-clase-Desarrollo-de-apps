import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarea } from './paginas/tarea/tarea';
import { Suma } from './paginas/suma/suma';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Tarea, Suma],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('To_Do');
}
