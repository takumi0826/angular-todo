import { EMPTY, Observable, of, pipe, throwError } from 'rxjs'
import {
  catchError,
  concatMap,
  finalize,
  map,
  mergeMap,
  take,
  tap,
} from 'rxjs/operators'

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { User, JwtToken, CreateUser, UserInfo, Task } from 'src/app/model/type'
import { Store } from '@ngrx/store'
import * as TaskActions from 'src/app/store/task/task.actions'
import { LoadingService } from './loading.service'
import { Url } from '../constant/url-const'
import * as AppActions from '../store/app/app-store.actions'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private host: string = 'http://localhost:3000/auth'
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store,
    private load: LoadingService
  ) {}

  public signIn(user: User): Observable<JwtToken> {
    this.load.start()
    const url = `${this.host}/sign-in`
    return this.http.post<JwtToken>(url, user, <Object>this.httpOptions).pipe(
      finalize(() => {
        console.log('sign-in:処理終了')
        this.load.stop()
      })
    )
  }

  public signUp(user: CreateUser): Observable<User> {
    this.load.start()
    const url = `${this.host}/sign-up`
    return this.http.post<User>(url, user, <Object>this.httpOptions).pipe(
      catchError((e) => {
        console.log(`エラーメッセージ: ${e.error.message}`)
        return EMPTY
      }),
      finalize(() => {
        console.log('処理終了')
        this.load.stop()
      })
    )
  }

  public signOut(): void {
    localStorage.removeItem('access_token')
    this.store.dispatch(TaskActions.clear())
    this.store.dispatch(AppActions.appInit())
  }

  public fetchUser(): Observable<UserInfo> {
    const url = `${this.host}/profile`
    return this.http.get<UserInfo>(url, <Object>this.httpOptions)
  }

  public async isAuthenticated() {
    const url = `${this.host}/authenticated`
    let isLogin = true
    await this.http
      .get<boolean>(url, <Object>this.httpOptions)
      .toPromise()
      .catch((err: HttpErrorResponse) => {
        if (401 === err.status) {
          this.signOut()
          isLogin = false
        }
      })
    return isLogin
  }
}
