import { Component, signal } from '@angular/core';
import { Card } from '../../../../core/components/card/card';

const LIMIT = 5;

@Component({
  selector: 'ind-counter-styled',
  imports: [Card],
  template: `
    <ind-card title="Contador estilado">
      <button (click)="handleCounter(-1)" title="Decrementar" [disabled]="counter() <= -limit">
        ➖
      </button>
      <span>
        Valor del contador
        <output [class.negative]="counter() < 0">
          {{ counter() }}
        </output>
      </span>
      <button (click)="handleCounter(1)" title="Incrementar" [disabled]="counter() >= limit">
        ➕
      </button>
      <button (click)="handleCounter(0)" title="Resetear" [disabled]="counter() === 0">⚙️</button>
      @if (counter() >= limit) {
        <p>Has llegado al límite superior del contador</p>
      } @else if (counter() <= -limit) {
        <p>Has llegado al límite inferior del contador</p>
      }
    </ind-card>
  `,
  styles: `
    .negative {
      color: red;
    }
  `,
})
export class CounterStyled {
  protected readonly counter = signal(0);
  protected readonly limit = LIMIT;

  protected handleCounter(value: number): void {
    if (value === 0) {
      this.counter.set(0);
    } else {
      this.counter.update((current) => current + value);
    }
  }
}
