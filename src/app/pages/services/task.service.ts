import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { TaskInfo, TaskItem } from '../../type/type'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private host: string = 'http://localhost:3000/task'
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }),
  }

  constructor(private http: HttpClient) {}

  public createTask(task: TaskItem): Observable<number> {
    const url = `${this.host}/create/v1`
    return this.http.post<number>(url, task, <Object>this.httpOptions).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
  }

  public getTask(): Observable<TaskInfo[]> {
    const url = `${this.host}/get-all/v1`
    return this.http.get<TaskInfo[]>(url, <Object>this.httpOptions).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
  }

  public updateTask(task: TaskInfo): Observable<number> {
    const url = `${this.host}/update/v1`
    return this.http.put<number>(url, task, <Object>this.httpOptions).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
  }

  public deleteTask(id: number): Observable<number> {
    const url = `${this.host}/delete/v1?id=${id}`
    return this.http.delete<number>(url, <Object>this.httpOptions).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
  }

  public getOneTask(id: number): Observable<TaskInfo> {
    const url = `${this.host}/get-one/v1?id=${id}`
    return this.http.get<TaskInfo>(url, <Object>this.httpOptions).pipe(
      catchError((e) => {
        return throwError(e)
      })
    )
  }

  public doneTask(id: number, isDone: boolean): Observable<number> {
    const url = `${this.host}/done/v1`
    return this.http
      .put<number>(url, { id, isDone }, <Object>this.httpOptions)
      .pipe(
        catchError((e) => {
          return throwError(e)
        })
      )
  }
}
