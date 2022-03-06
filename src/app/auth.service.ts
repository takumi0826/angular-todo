import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { JwtToken } from './type';
import { User } from './type/response/type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private host: string = 'http://localhost:3000/auth';
  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private http: HttpClient) {}

  public login(user: User): Observable<JwtToken> {
    const url = `${this.host}/login`;
    return this.http.post<JwtToken>(url, user, <Object>this.httpOptions);
  }
}
