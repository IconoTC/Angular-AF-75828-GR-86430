import { Observable, of } from "rxjs";
import { Task } from "../types/task";
import { Injectable } from "@angular/core";

export const TASKS: Task[] = [
  { id: 1, title: 'Crear el proyecto', owner: 'Ana', isCompleted: false },
  { id: 2, title: 'Testar el proyecto', owner: 'Luis', isCompleted: true },
  { id: 3, title: 'Subir a producción', owner: 'Marta', isCompleted: false },
];

@Injectable()
export class TasksService {

  async getTasks(): Promise<Task[]> {
    return TASKS;
  }

  getTasksRx(): Observable<Task[]> {
    return of(TASKS);
  }

}
