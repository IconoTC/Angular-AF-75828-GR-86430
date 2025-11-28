import { Component, ElementRef, inject, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskForm } from '../task-form/task-form';
import { TaskItem } from '../task-item/task-item';
import { Task} from '../../types/task';
import { Card } from '../../../../core/components/card/card';
import { AppStore } from '../../../../core/store/app-store';

@Component({
  selector: 'ind-tasks-list',
  imports: [TaskForm, TaskItem, Card],
  template: `
    <details #details>
      <summary>Añadir tarea</summary>
      <ind-task-form (createEvent)="add()" />
    </details>

    <ul>
      @for (task of tasks(); track task.id) {
        <li>
          <ind-task-item
            [task]="task"

          />
        </li>
      }
    </ul>

    @if (error()) {
      <ind-card>
        <p class="error">Error: {{ error() }}</p>
      </ind-card>
    }
  `,
  styles: `
    details {
      margin-block: 1.5rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    .error {
      color: red;
    }
  `,
})
export class TasksList implements OnInit, OnDestroy {
  taskState = inject(AppStore);
  tasks = signal<Task[]>([]);
  error = signal<string | null>(null);
  details = viewChild<ElementRef>('details');
  subscriptions: Subscription[] = [];


  ngOnInit(): void {
    console.log('Creado TasksList')
    this.load();
    const subs = this.taskState.error$.subscribe({
      next: (error) => this.error.set(error),
    });
    this.subscriptions.push(subs);
  }

  ngOnDestroy(): void {
    console.log('Destruido TasksList');
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  load() {
    const subs = this.taskState.tasks$.subscribe((tasksData) => this.tasks.set(tasksData));
    this.subscriptions.push(subs);
  }

  add() {
    if (this.details()?.nativeElement.open) {
      this.details()?.nativeElement.removeAttribute('open');
    }
  }
}
