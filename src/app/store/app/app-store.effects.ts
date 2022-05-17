import { Injectable } from '@angular/core'
import { Actions, ofType, createEffect, act } from '@ngrx/effects'
import { of } from 'rxjs'
import {
  switchMap,
  map,
  catchError,
  concatMap,
  tap,
  first,
  mergeMap,
} from 'rxjs/operators'
import * as AppActions from './app-store.actions'
import { AuthService } from 'src/app/services/auth.service'
import { Url } from 'src/app/constant/url-const'
import { Router } from '@angular/router'

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.auth),
      switchMap((actions) =>
        this.authService.fetchUser().pipe(
          mergeMap((user) => [
            AppActions.authSuccess({ user }),
            AppActions.loginSuccess(),
          ]),
          catchError((error) => {
            localStorage.removeItem('access_token')
            AppActions.loginFailure()
            return of(AppActions.authFailure())
          })
        )
      )
    )
  )

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.login),
      switchMap((actions) =>
        this.authService.signIn(actions.user).pipe(
          map((res) => {
            localStorage.setItem('access_token', res.access_token)
            return AppActions.auth()
          }),
          catchError((error) => {
            localStorage.removeItem('access_token')
            AppActions.loginFailure()
            return of(AppActions.authFailure())
          })
        )
      )
    )
  )
}
