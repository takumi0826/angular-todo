import { EMPTY, Observable, of, pipe, throwError } from 'rxjs'
import { catchError, concatMap, finalize, map, mergeMap, take, tap } from 'rxjs/operators'

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { User, JwtToken, CreateUser, UserInfo } from 'src/app/type/type'
import { Store } from '@ngrx/store'
import { clear, update } from 'src/app/state/user.actions'
import { LoadingService } from 'src/app/core/services/loading.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private host: string = 'http://localhost:3000/auth'
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }),
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<{ user: UserInfo }>,
    private load: LoadingService
  ) {}

  public signIn(user: User): Observable<JwtToken> {
    this.load.start()
    const url = `${this.host}/sign-in`
    return this.http.post<JwtToken>(url, user, <Object>this.httpOptions).pipe(
      take(1),
      catchError((e) => {
        console.log(`エラーメッセージ: ${e.error.message}`)
        return EMPTY
      }),
      finalize(() => {
        console.log('処理終了');
        this.load.stop()
      })
    )
  }

  public signUp(user: CreateUser): Observable<User> {
    this.load.start()
    const url = `${this.host}/sign-up`
    return this.http.post<User>(url, user, <Object>this.httpOptions).pipe(
      take(1),
      catchError((e) => {
        console.log(`エラーメッセージ: ${e.error.message}`)
        return EMPTY
      }),
      finalize(() => {
        console.log('処理終了');
        this.load.stop()
      })
    )
  }

  public signOut(): void {
    localStorage.removeItem('access_token')
    this.store.dispatch(clear())
    this.router.navigateByUrl('/sign-in')
  }

  public fetchUser(): Observable<UserInfo> {
    const url = `${this.host}/profile`
    return this.http.get<UserInfo>(url, <Object>this.httpOptions).pipe(
      take(1),
      catchError((e) => {
        console.log(`エラーメッセージ: ${e.error.message}`)
        return EMPTY
      }),
      finalize(() => {
        console.log('処理終了');
      })
    )
  }
}
