import { Component, signal } from '@angular/core';

@Component({
  selector: 'ind-header',
  imports: [],
  template: `
    <header [aria-label]="name()">
      <img src="/favicon.ico" alt="Logo de Angular" />
      <div class="container">
        <h1>{{ title() }}</h1>
        <p>{{ subtitle() }}</p>
      </div>
     <!-- Aquí va el menu -->
      <ng-content></ng-content>
    </header>
  `,
  styles: `
    :host {
      display: block;
      background-color: #8794a2ff;
      color: white;
      padding: 1rem;
      text-align: center;
    }

    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
    }

    header {
      display: grid;
      grid-template-columns: 1fr auto;
    }

    h1 {
      margin: 0;
      font-size: 1.5rem;
    }

    p {
      margin: 1rem;
      font-size: 1rem;
      text-decoration: underline;
    }
  `,
})
export class Header {
  protected readonly title = signal('Demo 2 - Angular 21');
  protected readonly subtitle = signal('Indra Formación');
  protected readonly name = signal('Demo 2');
}
