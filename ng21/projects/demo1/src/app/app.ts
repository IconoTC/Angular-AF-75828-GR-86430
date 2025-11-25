import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './core/components/menu/menu';
import { Layout } from './core/components/layout/layout';
import HomePage from './features/home/home-page';
import AboutPage from './features/about/about-page';
@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Menu, Layout, HomePage, AboutPage],
  template: `
    <ind-layout class="layout">
      <ind-menu />
      <router-outlet />
      <ind-home-page />
      <ind-about-page />
    </ind-layout>
  `,
  styles: [],
})
export class App {}
