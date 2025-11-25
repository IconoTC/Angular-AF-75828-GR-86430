import { Component } from '@angular/core';
import { MenuOption } from '../../types/menu-option';

@Component({
  selector: 'ind-menu',
  imports: [],
  template: `
    <nav>
      <ul>
        @for (item of menuOptions; track item.path) {
          <li>
            <a [href]="item.path">{{ item.label }}</a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: `
    nav {
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 1rem;
      }
      a {
        color: inherit;
        text-decoration: none;
        font-weight: bold;
      }
    }
  `,
})
export class Menu {
  protected menuOptions: MenuOption[] = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
  ];
}
