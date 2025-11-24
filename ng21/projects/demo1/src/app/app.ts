import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sample } from "./sample/sample";

@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Sample],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <ind-sample />
    <ind-sample />
    <ind-sample />

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Demo 1 - Angular 21');
}
