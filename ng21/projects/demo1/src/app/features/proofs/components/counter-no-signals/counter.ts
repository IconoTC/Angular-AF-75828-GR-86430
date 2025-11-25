import { Component } from '@angular/core';
import { Card } from '../../../../core/components/card/card';

@Component({
  selector: 'ind-counter-ns',
  imports: [Card],
  template: `
    <ind-card>
      <h3>Counter NS</h3>
      <button (click)="handleCounter(-1)" title="Decrementar">➖</button>
      <span>
        Valor del contador
        <output>
          {{ counter }}
        </output>
      </span>
      <button (click)="handleCounter(1)" title="Incrementar">➕</button>
      <button (click)="handleCounter(0)" title="Resetear">⚙️</button>
    </ind-card>
  `,
  styles: ``,
})
export class CounterNS {
  protected counter = 0;

  protected handleCounter(value: number): void {
    if (value === 0) {
      this.counter = 0;
    } else {
      this.counter += value;
    }
  }
}
