import { Component } from '@angular/core';
import { Card } from "../../../../core/components/card/card";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ind-greetings2',
  imports: [Card, FormsModule],
  template: `
    <ind-card>
      <h3>Greetings with References</h3>
      <p>Hola
      <output>
        {{ nameInput.value ? nameInput.value : 'amigo' }}
      </output>
      </p>
      <!-- <input type="text" placeholder="Escribe tu nombre"
      [value]="name()"
      (input)="name.set($any($event.target).value)" -->
      <!-- <input type="text" placeholder="Escribe tu nombre"
      [ngModel]="name()"
      (ngModelChange)="name.set($any($event))"
      /> -->
      <input type="text" placeholder="Escribe tu nombre" #nameInput
       [(ngModel)]="nameInput.value"/>
      <button (click)="nameInput.value = ''">Borrar</button>
    </ind-card>
  `,
  styles: ``,
})
export class Greetings2 {}

