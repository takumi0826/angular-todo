import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenHeader = request.clone({
      headers: request.headers.set(
        'Authorization',
        `Bearer ${localStorage.getItem('access_token')}`
      ),
    })

    return next.handle(tokenHeader)
  }
}
