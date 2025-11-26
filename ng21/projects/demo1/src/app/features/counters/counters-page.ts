import { Component, computed, signal } from '@angular/core';
import { Counter } from './components/counter/counter';

export interface CounterInfo {
  value: number;
  index: number;
}

@Component({
  selector: 'ind-counters-page',
  imports: [Counter],
  template: `
    <h2>Counters</h2>
    <p>Valor total: {{ total() }}</p>
    <p>Total de clicks: {{ totalClicks() }}</p>
    <ind-counter [index]="101" (countEvent)="handleCount($event)" />
    <ind-counter [index]="102" (countEvent)="handleCount($event)" />
  `,
  styles: ``,
})
class CountersPage {
  protected readonly totalClicks = signal(0);
  protected readonly total = computed(() =>
    this.counters().reduce((acc, counter) => acc + counter.value, 0),
  );

  protected counters = signal<CounterInfo[]>([
    { value: 0, index: 101 },
    { value: 0, index: 102 },
  ]);

  handleCount(counterInfo: CounterInfo): void {
    this.totalClicks.update((current) => current + 1);

    const data = [...this.counters()];
    const counter = data.find((c) => c.index === counterInfo.index);
    if (counter) {
      counter.value = counterInfo.value;
    }
    this.counters.set(data);
  }
}

export default CountersPage;
