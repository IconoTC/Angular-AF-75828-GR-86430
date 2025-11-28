import { inject, Injectable } from '@angular/core';
import { RepoRx } from '../../../core/types/repo';
import { Task, TaskDTO } from '../types/task';
import { Observable} from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<Task[]>(this.apiUrl)
    // .pipe(
    //   catchError((error) => {
    //     console.error('Error fetching tasks', error);
    //     return throwError(() => new Error('Error fetching tasks'));
    //   })
    // );
  }

  getByID(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Task>(url);
  }

  create(data: TaskDTO): Observable<Task> {
    const newTask: TaskDTO = {
      isCompleted: false,
      ...data,
    };
    return this.http.post<Task>(this.apiUrl, newTask);
  }

  update(id: number, data: Partial<TaskDTO>): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch<Task>(url, data);
  }

  delete(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
