import { inject, Injectable } from '@angular/core';
import { Task, TaskDTO } from '../../features/todo/types/task';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiTasksRepoRx } from '../../features/todo/services/api-tasks-repo-rx';
import { HttpErrorResponse } from '@angular/common/http';

interface TasksState {
  tasks$: BehaviorSubject<Task[]>;
  error$: BehaviorSubject<string | null>;
}

@Injectable({
  providedIn: 'root',
})
export class AppStore {
  private tasksService = inject(ApiTasksRepoRx);
  private tasksState: TasksState = {
    tasks$: new BehaviorSubject<Task[]>([]),
    error$: new BehaviorSubject<string | null>(null),
  };

  get tasks$(): Observable<Task[]> {
    return this.tasksState.tasks$.asObservable();
  }

  get error$(): Observable<string | null> {
    return this.tasksState.error$.asObservable();
  }

  constructor() {
    this.load();
  }

  private load() {
    this.tasksService.getAll().subscribe({
      next: (tasks) => {
        this.tasksState.tasks$.next(tasks);
      },
      error: (err: HttpErrorResponse) => {
        this.tasksState.error$.next('Error loading tasks: ' + err.message);
        console.error('Error loading tasks', err);
      },
    });
  }

  create(data: TaskDTO) {
    const newTask: TaskDTO = {
      title: data.title,
      owner: data.owner,
      isCompleted: false,
    };
    this.tasksService.create(newTask).subscribe({
      next: (task: Task) => {
        const previousTasks = this.tasksState.tasks$.getValue();
        this.tasksState.tasks$.next([...previousTasks, task]);
      },
      error: (err: HttpErrorResponse) => {
        this.tasksState.error$.next(`Error creating task - ${err.message}`);
        console.error('Error creating task', err);
      },
    });
  }
  update(updatedTask: Task) {
    const { id, ...taskData } = updatedTask;

    // Operación asíncrona -> repo
    this.tasksService.update(id, taskData).subscribe({
      next: () => {
        // Operación -> sincrona -> estado interno
        const previousTasks = this.tasksState.tasks$.getValue();
        const tasks = previousTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));
        this.tasksState.tasks$.next(tasks);
      },
      error: (err: HttpErrorResponse) => {
        this.tasksState.error$.next(`Error updating task - ${err.message}`);
        console.error('Error updating task', err);
      },
    });
  }

  delete(task: Task) {
    this.tasksService.delete(task.id).subscribe({
      next: () => {
        const previousTasks = this.tasksState.tasks$.getValue();
        const tasks = previousTasks.filter((t) => t.id !== task.id);
        this.tasksState.tasks$.next(tasks);
      },
      error: (err: HttpErrorResponse) => {
        this.tasksState.error$.next(`Error deleting task - ${err.message}`);
        console.error('Error deleting task', err);
      },
    });
  }
}
