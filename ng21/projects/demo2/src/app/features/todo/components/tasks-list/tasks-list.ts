import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskItem } from '../task-item/task-item';
import { Task, TaskDTO } from '../../types/task';
import { LocalTasksRepo } from '../../services/local-tasks-repo';

@Component({
  selector: 'ind-tasks-list',
  imports: [TaskForm, TaskItem],
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
  `,
  styles: `
    details {
      margin-block: 1.5rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
  `,
})
export class TasksList implements OnInit {
  tasks = signal<Task[]>([]);
  details = viewChild<ElementRef>('details');
  tasksService = inject(LocalTasksRepo);

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.tasksService.getAll().then((tasksData) => this.tasks.set(tasksData));
  }

  delete(task: Task) {
    // Operación asíncrona -> repo
    this.tasksService.delete(task.id).then(() => {
      // Operación -> sincrona -> estado interno
      const data = this.tasks().filter((t) => t.id !== task.id);
      this.tasks.set(data);
    });
  }

  update(updatedTask: Task) {
    const { id, ...taskData } = updatedTask;

    // Operación asíncrona -> repo
    this.tasksService
      .update(id, taskData)
      .then(() => {
        // Operación -> sincrona -> estado interno
        const data = this.tasks().map((t) => (t.id === updatedTask.id ? updatedTask : t));
        this.tasks.set(data);
      })
      .catch(() => {
        //
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
      .then((data: Task) => {
        // Operación -> sincrona -> estado interno
        this.tasks.update((tasks) => [...tasks, data]);
      })
      .catch(() => {
        //
      })
      .finally(() => {
        // cerrar el details
        if (this.details()?.nativeElement.open) {
          this.details()?.nativeElement.removeAttribute('open');
        }
      });
  }
}
