import { Component, input } from '@angular/core';
import { MenuOption } from '../../types/menu-option';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'ind-menu',
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        @for (item of options(); track item.path) {
          <li>
            <a [routerLink]="item.path" routerLinkActive="active">{{ item.label }}</a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: `
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
    .active {
      text-decoration: underline;
      color: #102337ff;
    }
  `,
})
export class Menu {
  // forma anterior de definir el input
  // @Input() options!: MenuOption[]
  options = input.required<MenuOption[]>();
}
