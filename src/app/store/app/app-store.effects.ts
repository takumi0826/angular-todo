import { Injectable } from '@angular/core'
import { TaskService } from 'src/app/services/task.service'
import { Actions, ofType, createEffect, act } from '@ngrx/effects'
import { of } from 'rxjs'
import { switchMap, map, catchError, concatMap, tap } from 'rxjs/operators'
import * as AppActions from './app-store.actions'
import { AuthService } from 'src/app/services/auth.service'

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.getUser),
      switchMap(() =>
        this.authService.fetchUser().pipe(
          map((user) => {
            if (!!user) {
              AppActions.getLoginSuccess()
            }
            return AppActions.getUserSuccess({ user })
          }),
          catchError((error) => {
            AppActions.getLoginFailure()
            return of(AppActions.getUserFailure())
          })
        )
      )
    )
  )
}
