import { Component, computed, input, output, signal } from '@angular/core';
import { Card } from '../../../../core/components/card/card';
import { CounterInfo } from '../../counters-page';

@Component({
  selector: 'ind-counter',
  imports: [Card],
  template: `
    <ind-card [title]="title()">
      <button (click)="handleCounter(-1)" title="Decrementar">➖</button>
      <span>
        Valor del contador
        <output>
          {{ counter() }}
        </output>
      </span>
      <button (click)="handleCounter(1)" title="Incrementar">➕</button>
      <button (click)="handleCounter(0)" title="Resetear">⚙️</button>
    </ind-card>
  `,
  styles: ``,
})
export class Counter {
  protected readonly counter = signal(0);
  index = input.required<number>();
  title = computed(() => `Counter ${this.index()}`);
  // @Output() countEvent = new EventEmitter<CounterInfo>
  countEvent = output<CounterInfo>();

  protected handleCounter(value: number): void {
    if (value === 0) {
      this.counter.set(0);
    } else {
      this.counter.update((current) => current + value);
    }
    this.countEvent.emit({
      index: this.index(),
      value: this.counter(),
    });
  }
}
