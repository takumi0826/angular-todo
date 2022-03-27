import { Observable, throwError } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { User, JwtToken, CreateUser, UserInfo } from 'src/app/type/type'

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
  constructor(private http: HttpClient, private router: Router) {}

  public signIn(user: User): Observable<JwtToken> {
    const url = `${this.host}/sign-in`
    return this.http.post<JwtToken>(url, user, <Object>this.httpOptions).pipe(
      catchError((e) => {
        return throwError(e.error.message)
      })
    )
  }

  public signUp(user: CreateUser): Observable<User> {
    const url = `${this.host}/sign-up`
    return this.http.post<User>(url, user, <Object>this.httpOptions).pipe(
      catchError((e) => {
        return throwError(e.error.message)
      })
    )
  }

  public signOut(): void {
    localStorage.removeItem('access_token')
    this.router.navigateByUrl('/sign-in')
  }

  public fetchUser(): Observable<UserInfo> {
    const url = `${this.host}/profile`
    return this.http.get<UserInfo>(url, <Object>this.httpOptions)
  }
}
