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
import { TopService } from 'src/app/services/top.service'
import { MatDialog } from '@angular/material/dialog'
import { ModalComponent } from 'src/app/modal/error/modal.component'

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private topService: TopService,
    public dialog: MatDialog
  ) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.auth),
      switchMap((actions) =>
        this.authService.fetchUser().pipe(
          mergeMap((user) => [
            AppActions.authSuccess({ user }),
            AppActions.signInSuccess(),
          ]),
          catchError((error) => {
            localStorage.removeItem('access_token')
            AppActions.signInFailure()
            return of(AppActions.authFailure())
          })
        )
      )
    )
  )

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.signIn),
      switchMap((actions) =>
        this.authService.signIn(actions.user).pipe(
          mergeMap((res) => {
            localStorage.setItem('access_token', res.access_token)
            return [
              AppActions.authSuccess({ user: res.user }),
              AppActions.signInSuccess(),
            ]
          }),
          catchError((error) => {
            localStorage.removeItem('access_token')
            AppActions.signInFailure()
            return of(AppActions.authFailure())
          })
        )
      )
    )
  )

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.signUp),
      switchMap((actions) =>
        this.authService.signUp(actions.user).pipe(
          map(() => AppActions.signUpSuccess()),
          catchError((error) => of(AppActions.signUpFailure()))
        )
      )
    )
  )

  signUpSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AppActions.signUpSuccess),
        tap(() => {
          this.dialog.open(ModalComponent, {
            data: {
              message: 'アカウントの作成が完了しました',
            },
          })
          this.topService.selectIndex(0)
        })
      ),
    { dispatch: false }
  )
}
