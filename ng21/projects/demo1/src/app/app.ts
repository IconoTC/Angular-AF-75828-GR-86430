import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './core/components/menu/menu';
import { Layout } from './core/components/layout/layout';
import HomePage from './features/home/home-page';
import AboutPage from './features/about/about-page';
import ProofsPage from "./features/proofs/proofs-page";
@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Menu, Layout, HomePage, AboutPage, ProofsPage],
  template: `
    <ind-layout class="layout">
      <ind-menu class="main-menu"/>
      <router-outlet />
      <ind-home-page />
      <ind-about-page />
      <ind-proofs-page />
    </ind-layout>
  `,
  styles: [],
})
export class App {}
