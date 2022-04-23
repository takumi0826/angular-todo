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
} from 'rxjs/operators'
import * as AppActions from './app-store.actions'
import { AuthService } from 'src/app/services/auth.service'

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.auth),
      switchMap(() =>
        this.authService.fetchUser().pipe(
          map((user) => {
            AppActions.loginSuccess()
            return AppActions.authSuccess({ user })
          }),
          catchError((error) => {
            AppActions.loginFailure()
            return of(AppActions.authFailure())
          })
        )
      )
    )
  )
}
