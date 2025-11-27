import { Injectable } from '@angular/core';
import { Repo } from '../../../core/types/repo';
import { Task, TaskDTO } from '../types/task';
import { TASKS } from './tasks';

@Injectable({
  providedIn: 'root',
})
export class InMemoryTasksRepo implements Repo<Task, TaskDTO> {
  private tasks: Task[] = TASKS.map((t) => ({ ...t }));

  private getNextId(): number {
    return Math.max(0, ...this.tasks.map((t) => t.id)) + 1;
  }

  async getAll(): Promise<Task[]> {
    console.log('REPO:', this.tasks);
    return [...this.tasks];
  }

  async getByID(id: number): Promise<Task> {
    const task = this.tasks.find((t) => t.id === id);
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
    this.tasks.push(newTask);
    console.log('REPO:', this.tasks);
    return { ...newTask };
  }

  async update(id: number, data: Partial<TaskDTO>): Promise<Task> {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw Error(`Task with id ${id} not found`);
    }
    this.tasks[index] = { ...this.tasks[index], ...data };
    console.log('REPO:', this.tasks);
    return { ...this.tasks[index] };
  }

  async delete(id: number): Promise<void> {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw Error(`Task with id ${id} not found`);
    }
    this.tasks.splice(index, 1);
    console.log('REPO:', this.tasks);
  }
}
