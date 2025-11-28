import { Component, input, output } from '@angular/core';
import { Task } from '../../types/task';
import { Card } from '../../../../core/components/card/card';

@Component({
  selector: 'ind-task-item',
  imports: [Card],
  template: `
    <ind-card [title]="task().title">
      <p>Responsable: {{ task().owner }}</p>
      <p>ID: {{ task().id }}</p>
      <label>
        <input type="checkbox" [checked]="task().isCompleted"
        (change)="handleEmitChange()"
        />
        Completada
      </label>
      <button (click)="handleEmitDelete()">Borrar</button>
    </ind-card>
  `,
  styles: ``,
})
export class TaskItem {
  task = input.required<Task>();
  deleteEvent  = output<Task>();
  updateEvent  = output<Task>();

  handleEmitDelete() {
    this.deleteEvent.emit(this.task());
  }

  handleEmitChange() {
    const updatedTask: Task = {
      ...this.task(),
      isCompleted: !this.task().isCompleted,
    };
    this.updateEvent.emit(updatedTask);
  }
}
