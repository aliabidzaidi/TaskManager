import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreConfig } from './core.config';


@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor(private http: HttpClient) { }
  public getEmployees(): Observable<any> {
    const url = CoreConfig.getPath() + `/employee`;

    return this.http.get(url);
  }

  public getTasks(): Observable<any> {
    const url = CoreConfig.getPath() + `/task`;

    return this.http.get(url);
  }

  public getTaskById(taskId: number): Observable<any> {
    const url = CoreConfig.getPath() + `/task/` + taskId;

    return this.http.get(url);
  }

  public addTask(task: any): Observable<any> {
    const url = CoreConfig.getPath() + `/task`;
    console.log(task);
    return this.http.post(url, task);
  }

  public editTask(task: any): Observable<any> {
    const url = CoreConfig.getPath() + `/task`;

    return this.http.put(url, task);
  }

  public deleteTask(taskId: number): Observable<any> {
    const url = CoreConfig.getPath() + `/task/` + taskId;

    return this.http.delete(url);
  }
}

