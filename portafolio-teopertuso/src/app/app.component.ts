import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: '../styles/tailwind.css'
})
export class App {
  protected readonly title = signal('practicando-angular');
}
