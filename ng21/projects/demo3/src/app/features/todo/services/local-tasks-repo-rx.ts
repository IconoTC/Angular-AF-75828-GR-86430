import { Injectable } from '@angular/core';
import { RepoRx } from '../../../core/types/repo';
import { Task, TaskDTO } from '../types/task';
import { TASKS } from './tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalTasksRepoRx implements RepoRx<Task, TaskDTO> {

  private storageKey = 'tasks';

  private initializeStorage(): Task[] {
    const initialTasks: Task[] = TASKS.map((t) => ({ ...t }));
    this.saveToLocalStorage(initialTasks);
    return initialTasks;
  }

  private saveToLocalStorage(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  private loadFromLocalStorage(): Task[] {
    const tasksJson = localStorage.getItem(this.storageKey);
    if (tasksJson) {
      return JSON.parse(tasksJson);
    }
    return this.initializeStorage(); // []
  }

  private getNextId(): number {
    const tasks = this.loadFromLocalStorage();
    return Math.max(0, ...tasks.map((t) => t.id)) + 1;
  }

  getAll(): Observable<Task[]> {
    const tasks = this.loadFromLocalStorage();
    return of([...tasks]);
  }

  getByID(id: number): Observable<Task> {
    const tasks = this.loadFromLocalStorage();
    const task = tasks.find((t) => t.id === id);
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
    this.saveToLocalStorage([...this.loadFromLocalStorage(), newTask]);
    return of({ ...newTask });
  }

  update(id: number, data: Partial<TaskDTO>): Observable<Task> {
    const tasks = this.loadFromLocalStorage();
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw Error(`Task with id ${id} not found`);
    }
    tasks[index] = { ...tasks[index], ...data };
    this.saveToLocalStorage(tasks);
    return of({ ...tasks[index] });
  }

  delete(id: number): Observable<void> {
    const tasks = this.loadFromLocalStorage();
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw Error(`Task with id ${id} not found`);
    }
    tasks.splice(index, 1);
    this.saveToLocalStorage(tasks);
    return of(undefined);
  }
}
