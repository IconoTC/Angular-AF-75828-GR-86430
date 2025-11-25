import { Component, signal } from '@angular/core';
import { Card } from "../../../../core/components/card/card";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-greetings',
  imports: [Card, FormsModule],
  template: `
    <ind-card>
      <h3>Greetings</h3>
      <p>Hola
      <output>
        {{ name() ? name() : 'amigo' }}
      </output>
      </p>
      <!-- <input type="text" placeholder="Escribe tu nombre"
      [value]="name()"
      (input)="name.set($any($event.target).value)" -->
      <!-- <input type="text" placeholder="Escribe tu nombre"
      [ngModel]="name()"
      (ngModelChange)="name.set($any($event))"
      /> -->
      <input type="text" placeholder="Escribe tu nombre" [(ngModel)]="name" />
      <button (click)="handleReset()">Borrar</button>
    </ind-card>
  `,
  styles: ``,
})
export class Greetings {
  protected readonly name = signal('');

  protected handleReset(): void {
    this.name.set('');
  }
}
