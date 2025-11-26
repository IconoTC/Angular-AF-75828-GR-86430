import { Component, ElementRef, OnInit, signal, viewChild } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskItem } from '../task-item/task-item';
import { Task, TaskDTO } from '../../types/task';
import { JsonPipe } from '@angular/common';
import { getTasks } from '../../services/tasks';

@Component({
  selector: 'ind-tasks-list',
  imports: [TaskForm, TaskItem, JsonPipe],
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

    <pre>
    {{ tasks() | json }}
    </pre
    >
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

  ngOnInit(): void {this.load()}

  load() {
    getTasks().then((tasksData) => this.tasks.set(tasksData));
  }

  delete(task: Task) {
    const data = this.tasks().filter((t) => t.id !== task.id);
    this.tasks.set(data);

    // this.tasks.update(
    //   (tasks) => tasks.filter((t) => t.id !== task.id
    // ));
  }

  update(updatedTask: Task) {
    const data = this.tasks().map((t) => (t.id === updatedTask.id ? updatedTask : t));
    this.tasks.set(data);
  }

  add(data: TaskDTO) {
    const newTask: Task = {
      id: Math.max(0, ...this.tasks().map((t) => t.id)) + 1,
      title: data.title,
      owner: data.owner,
      isCompleted: false,
    };
    // const newTasks = [...this.tasks(), newTask];
    // this.tasks.set(newTasks);
    this.tasks.update((tasks) => [...tasks, newTask]);

    // cerrar el details

    if (this.details()?.nativeElement.open) {
      this.details()?.nativeElement.removeAttribute('open');
    }
  }
}
