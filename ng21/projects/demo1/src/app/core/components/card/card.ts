import { Component, input } from '@angular/core';

@Component({
  selector: 'ind-card',
  imports: [],
  template: `
  @if (title()) {
    <h3>{{ title() }}</h3>

  }
  <ng-content></ng-content>
  `,
  styles: `
    :host {
      display: block;
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    h3 {
      margin: 0 0 1rem 0;
      font-weight: normal;
      border-bottom: 1px solid #5e4747ff;
      padding-bottom: 0.5rem;
    }
  `,
})
export class Card {
  title = input<string>()
}
