import { Injectable } from '@angular/core';
import { Repo } from '../../../core/types/repo';
import { Task, TaskDTO } from '../types/task';
import { TASKS } from './tasks';

@Injectable({
  providedIn: 'root',
})
export class LocalTasksRepo implements Repo<Task, TaskDTO> {

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

  async getAll(): Promise<Task[]> {
    const tasks = this.loadFromLocalStorage();
    return [...tasks];
  }

  async getByID(id: number): Promise<Task> {
    const tasks = this.loadFromLocalStorage();
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      throw Error(`Task with id ${id} not found`);
    }
    return { ...task };
  }

  async create(data: TaskDTO): Promise<Task> {
    const newTask: Task = {
      id: this.getNextId(),
      isCompleted: false,
      ...data,
    };
    this.saveToLocalStorage([...this.loadFromLocalStorage(), newTask]);
    return { ...newTask };
  }

  async update(id: number, data: Partial<TaskDTO>): Promise<Task> {
    const tasks = this.loadFromLocalStorage();
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw Error(`Task with id ${id} not found`);
    }
    tasks[index] = { ...tasks[index], ...data };
    this.saveToLocalStorage(tasks);
    return { ...tasks[index] };
  }

  async delete(id: number): Promise<void> {
    const tasks = this.loadFromLocalStorage();
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw Error(`Task with id ${id} not found`);
    }
    tasks.splice(index, 1);
    this.saveToLocalStorage(tasks);
  }
}
