import { EMPTY, Observable, throwError } from 'rxjs'
import { catchError, filter, finalize, map } from 'rxjs/operators'

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Task, TaskResponse } from '../model/type'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private host: string = 'http://localhost:3000/task'
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  }

  constructor(private http: HttpClient) {}

  public create(task: Pick<Task, 'title' | 'isDone'>): Observable<Task> {
    const url = `${this.host}/create/v1`
    return this.http
      .post<TaskResponse>(url, task, <Object>this.httpOptions)
      .pipe(
        filter((data) => !!data),
        map((data: TaskResponse) => {
          return {
            id: data.id,
            title: data.title,
            content: data.content,
            isDone: data.isDone,
          }
        })
      )
  }

  public loadAll(): Observable<Task[]> {
    const url = `${this.host}/get-all/v1`
    return this.http.get<Task[]>(url, <Object>this.httpOptions).pipe(
      finalize(() => {
        console.log('loadAll:処理終了')
      })
    )
  }

  public load(id: number): Observable<Task> {
    const url = `${this.host}/get-one/v1?id=${id}`
    return this.http.get<Task>(url, <Object>this.httpOptions).pipe(
      catchError((e) => {
        console.log(`エラーメッセージ: ${e.error.message}`)
        return EMPTY
      }),
      finalize(() => {
        console.log('load:処理終了')
      })
    )
  }

  public update(task: Task): Observable<number> {
    const url = `${this.host}/update/v1`
    return this.http.put<number>(url, task, <Object>this.httpOptions).pipe(
      catchError((e) => {
        console.log(`エラーメッセージ: ${e.error.message}`)
        return EMPTY
      }),
      finalize(() => {
        console.log('update:処理終了')
      })
    )
  }

  public delete(id: number): Observable<number> {
    const url = `${this.host}/delete/v1?id=${id}`
    return this.http.delete<number>(url, <Object>this.httpOptions).pipe(
      filter((data: any) => !!data.affected),
      map(() => id)
    )
  }

  public doneTask(id: number, isDone: boolean): Observable<number> {
    const url = `${this.host}/done/v1`
    return this.http
      .put<number>(url, { id, isDone }, <Object>this.httpOptions)
      .pipe(
        catchError((e) => {
          console.log(`エラーメッセージ: ${e.error.message}`)
          return EMPTY
        }),
        finalize(() => {
          console.log('doneTask:処理終了')
        })
      )
  }
}
