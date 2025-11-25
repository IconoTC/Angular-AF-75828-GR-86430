import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'ind-layout',
  imports: [Header, Footer],
  template: `
    <ind-header>
      <!--  aqi va el menu -->
      <ng-content select=".main-menu"></ng-content>
    </ind-header>

    <main>
      <!-- aquí va el contenido -->
      <ng-content></ng-content>
    </main>
    <ind-footer />
  `,
  styles: `
  main {
    padding: 1rem 2rem;
  }`,
})
export class Layout {}
