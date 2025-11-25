import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './core/components/menu/menu';
import { Card } from './core/components/card/card';
import { Layout } from './core/components/layout/layout';
@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Menu, Card, Layout],
  template: `
    <ind-layout  class="layout">
      <ind-menu />
      <router-outlet />
      <ind-card>Aquí irá el contenido de la aplicación</ind-card>
    </ind-layout>
  `,
  styles: [],
})
export class App {}
