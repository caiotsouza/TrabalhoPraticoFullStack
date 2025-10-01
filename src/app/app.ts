import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentApp } from './components/component-app/component-app';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TrabFullStack');
}
