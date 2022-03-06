import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { JwtToken, UserInfo } from './type';
import { CreateUser, User } from './type/response/type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private host: string = 'http://localhost:3000/auth';
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    }),
  };
  constructor(private http: HttpClient) {}

  public login(user: User): Observable<JwtToken> {
    const url = `${this.host}/login`;
    return this.http.post<JwtToken>(url, user, <Object>this.httpOptions);
  }

  public create(user: CreateUser): Observable<User> {
    const url = `${this.host}/create`;
    return this.http.post<User>(url, user, <Object>this.httpOptions);
  }

  public fetchUser(): Observable<UserInfo> {
    const url = `${this.host}/profile`;
    return this.http.get<UserInfo>(url, <Object>this.httpOptions);
  }
}
