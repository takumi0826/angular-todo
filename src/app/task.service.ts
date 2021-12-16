import { Observable } from 'rxjs';

import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TaskInfo, TaskItem } from './type';
import { TaskResponseDto } from './type/response/type';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private host: string = 'http://localhost:8080/api';
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http: HttpClient) {}

  public createTask(task: TaskItem): Observable<number> {
    const url = `${this.host}/insert-task`;
    return this.http.post<number>(url, task, <Object>this.httpOptions);
  }

  public getTask(): Observable<TaskInfo[]> {
    const url = `${this.host}/get-task`;
    return this.http.get<TaskInfo[]>(url, <Object>this.httpOptions);
  }

  public updateTask(task: TaskInfo): Observable<number> {
    const url = `${this.host}/update-task`;
    return this.http.put<number>(url, task, <Object>this.httpOptions);
  }

  public deleteTask(id: number): Observable<number> {
    const url = `${this.host}/delete-task/${id}`;
    return this.http.delete<number>(url, <Object>this.httpOptions);
  }

  public getOneTask(id: number): Observable<TaskInfo> {
    const url = `${this.host}/one-task?id=${id}`;
    return this.http.get<TaskInfo>(url, <Object>this.httpOptions);
  }

  public doneTask(id: number, bool: boolean): Observable<number> {
    const url = `${this.host}/done-task`;
    return this.http.put<number>(url, {id, bool}, <Object>this.httpOptions);
  }
}
