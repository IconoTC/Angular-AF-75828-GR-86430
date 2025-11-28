import { inject, Injectable } from '@angular/core';
import { RepoRx } from '../../../core/types/repo';
import { Task, TaskDTO } from '../types/task';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiTasksRepoRx implements RepoRx<Task, TaskDTO> {
  http = inject(HttpClient);

  apiUrl = environment.api_url + '/tasks';
  getAll(): Observable<Task[]> {
    // Como sería con fetch y promesas
    // return from(
    //   fetch(this.apiUrl)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json();
    //     })
    //     .then((json) => {
    //       console.log(json);
    //       return json as Task[];
    //     }),
    // );
    return this.http
      .get<Task[]>(this.apiUrl)
      .pipe(map((tasks) => tasks.sort((a, b) => a.owner.localeCompare(b.owner))))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching tasks', error);
          return throwError(() => error);
        }),
      );
  }

  getByID(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching task by ID', error);
        return throwError(() => error);
      }),
    );
  }

  create(data: TaskDTO): Observable<Task> {
    const newTask: TaskDTO = {
      isCompleted: false,
      ...data,
    };
    return this.http.post<Task>(this.apiUrl, newTask).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error creating task', error);
        return throwError(() => error);
      }),
    );
  }

  update(id: number, data: Partial<TaskDTO>): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch<Task>(url, data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error updating task', error);
        return throwError(() => error);
      }),
    );
  }

  delete(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error deleting task', error);
        return throwError(() => error);
      }),
    );
  }
}
