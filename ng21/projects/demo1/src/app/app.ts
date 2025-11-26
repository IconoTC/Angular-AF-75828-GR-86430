import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './core/components/menu/menu';
import { Layout } from './core/components/layout/layout';
import { MenuOption } from './core/types/menu-option';
import { menuOptions } from './app.routes';

@Component({
  selector: 'ind-root',
  imports: [RouterOutlet, Menu, Layout],
  template: `
    <ind-layout class="layout">
      <ind-menu [options]="menuOptions" class="main-menu" />
      <router-outlet />
    </ind-layout>
  `,
  styles: [],
})
export class App {
  protected menuOptions: MenuOption[] = menuOptions;
}
