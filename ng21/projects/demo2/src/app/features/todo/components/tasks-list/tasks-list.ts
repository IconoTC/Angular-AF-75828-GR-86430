import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskItem } from '../task-item/task-item';
import { Task, TaskDTO } from '../../types/task';
import { TasksRepoRx } from '../../../../app.routes';
import { finalize, Observer } from 'rxjs';
import { Card } from '../../../../core/components/card/card';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ind-tasks-list',
  imports: [TaskForm, TaskItem, Card],
  template: `
    <details #details>
      <summary>Añadir tarea</summary>
      <ind-task-form (createEvent)="add($event)" />
    </details>

    <ul>
      @for (task of tasks(); track task.id) {
        <li>
          <ind-task-item
            [task]="task"
            (deleteEvent)="delete($event)"
            (updateEvent)="update($event)"
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
export class TasksList implements OnInit {
  tasks = signal<Task[]>([]);
  details = viewChild<ElementRef>('details');
  tasksService = inject(TasksRepoRx);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load() {
    const observer: Partial<Observer<Task[]>> = {
      next: (tasksData) => this.tasks.set(tasksData),
      error: (err) => {
        this.error.set(`Error loading tasks - ${err.message}`);
        console.error('Error loading tasks', err);
      },
    };

    this.tasksService.getAll().subscribe(observer);
  }

  delete(task: Task) {
    // Operación asíncrona -> repo
    this.tasksService.delete(task.id).subscribe({
      next: () => {
        // Operación -> sincrona -> estado interno
        const data = this.tasks().filter((t) => t.id !== task.id);
        this.tasks.set(data);
      },
      error: (err: HttpErrorResponse) => {
        this.error.set(`Error deleting task - ${err.message}`);
        console.error('Error deleting task', err);
      },
    });
  }

  update(updatedTask: Task) {
    const { id, ...taskData } = updatedTask;

    // Operación asíncrona -> repo
    this.tasksService.update(id, taskData).subscribe({
      next: () => {
        // Operación -> sincrona -> estado interno
        const data = this.tasks().map((t) => (t.id === updatedTask.id ? updatedTask : t));
        this.tasks.set(data);
      },
      error: (err) => {
        this.error.set(`Error updating task - ${err.message}`);
        console.error('Error updating task', err);
      },
    });
  }

  // Enfoque NO optimista
  // Operación asíncrona -> repo
  // Operación -> sincrona -> estado interno

  // Enfoque optimista
  // Operación -> sincrona -> estado interno
  // Operación asíncrona -> repo

  add(data: TaskDTO) {
    const newTask: TaskDTO = {
      title: data.title,
      owner: data.owner,
      isCompleted: false,
    };

    // Operación asíncrona -> repo
    this.tasksService
      .create(newTask)
      .pipe(
        finalize(() => {
          // cerrar el details
          if (this.details()?.nativeElement.open) {
            this.details()?.nativeElement.removeAttribute('open');
          }
        }),
      )
      .subscribe({
        next: (data: Task) => {
          // Operación -> sincrona -> estado interno
          this.tasks.update((tasks) => [...tasks, data]);
        },
        error: (err) => {
          this.error.set(`Error creating task - ${err.message}`);
          console.error('Error creating task', err);
        },
      });
  }
}
