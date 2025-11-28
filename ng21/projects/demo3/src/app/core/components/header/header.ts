import { Component, inject, signal } from '@angular/core';
import { TITLE } from '../../../app.config';
import { AppStore } from '../../store/app-store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ind-header',
  imports: [AsyncPipe],
  template: `
    @let tasks = tasks$ | async;
    <header [aria-label]="name()">
      <img src="/favicon.ico" alt="Logo de Angular" />
      <div class="container">
        <h1>{{ title() }}</h1>
        <p>{{ subtitle() }}</p>
        <p>Tareas: {{ tasks?.length }}</p>
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

  appTitle = inject(TITLE);
  tasks$ = inject(AppStore).tasks$;



  protected readonly title = signal(this.appTitle);
  protected readonly subtitle = signal('Indra Formación');
  protected readonly name = signal('Demo 2');
}
