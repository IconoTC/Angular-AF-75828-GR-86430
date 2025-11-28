import { Component, inject, input } from '@angular/core';
import { Task } from '../../types/task';
import { Card } from '../../../../core/components/card/card';
import { AppStore } from '../../../../core/store/app-store';

@Component({
  selector: 'ind-task-item',
  imports: [Card],
  template: `
    <ind-card [title]="task().title">
      <p>Responsable: {{ task().owner }}</p>
      <p>ID: {{ task().id }}</p>
      <label>
        <input type="checkbox" [checked]="task().isCompleted" (change)="handleEmitChange()" />
        Completada
      </label>
      <button (click)="handleEmitDelete()">Borrar</button>
    </ind-card>
  `,
  styles: ``,
})
export class TaskItem {
  taskState = inject(AppStore);
  task = input.required<Task>();

  handleEmitDelete() {
    this.taskState.delete(this.task());
  }

  handleEmitChange() {
    const updatedTask: Task = {
      ...this.task(),
      isCompleted: !this.task().isCompleted,
    };
    this.taskState.update(updatedTask);
  }
}
