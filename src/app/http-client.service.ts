import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Login, TaskInfo } from './type';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private host: string = 'http://localhost:8080';
  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private http: HttpClient) {}

  public login(login: Login): void {
    const url = `${this.host}/login`;
    this.http.post<number>(url, login, this.httpOptions);
  }
}
