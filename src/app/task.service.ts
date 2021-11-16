import { HttpClient,HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskInfo } from './type';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private host: string = 'http://localhost:8080';
  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http: HttpClient) {}

  public createTask(task: TaskInfo): void {
    const url = `${this.host}/tasks`;
    this.http.post<number>(url, task, this.httpOptions);
  }

  public getTask(): Promise<TaskInfo[]> {
    const url = `${this.host}/tasks`;
    return this.http
      .get<TaskInfo[]>(url, this.httpOptions)
      .toPromise()
      .then((res) => res)
      .catch((err) => err);
  }

  public updateTask(task: TaskInfo): Observable<HttpEvent<number>> {
    const url = `${this.host}/tasks/${task.id}`;
    return this.http.put<number>(url, task, this.httpOptions);
  }

  public deleteTask(id: number): Observable<HttpEvent<number>> {
    const url = `${this.host}/tasks/${id}`;
    return this.http.delete<number>(url, this.httpOptions);
  }
}
