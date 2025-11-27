import { Injectable } from '@angular/core';
import { RepoRx } from '../../../core/types/repo';
import { Task, TaskDTO } from '../types/task';
import { TASKS } from './tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryTasksRepoRx implements RepoRx<Task, TaskDTO> {
  private tasks: Task[] = TASKS.map((t) => ({ ...t }));

  private getNextId(): number {
    return Math.max(0, ...this.tasks.map((t) => t.id)) + 1;
  }

  getAll(): Observable<Task[]> {
    console.log('REPO:', this.tasks);
    return of([...this.tasks]);
  }

  getByID(id: number): Observable<Task> {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw Error(`Task with id ${id} not found`);
    }
    return of({ ...task });
  }

  create(data: TaskDTO): Observable<Task> {
    const newTask: Task = {
      id: this.getNextId(),
      isCompleted: false,
      ...data,
    };
    this.tasks.push(newTask);
    console.log('REPO:', this.tasks);
    return of({ ...newTask });
  }

  update(id: number, data: Partial<TaskDTO>): Observable<Task> {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw Error(`Task with id ${id} not found`);
    }
    this.tasks[index] = { ...this.tasks[index], ...data };
    console.log('REPO:', this.tasks);
    return of({ ...this.tasks[index] });
  }

  delete(id: number): Observable<void> {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw Error(`Task with id ${id} not found`);
    }
    this.tasks.splice(index, 1);
    console.log('REPO:', this.tasks);
    return of(undefined);
  }
}
