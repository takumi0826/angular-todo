import { Injectable } from '@angular/core'
import { TaskService } from 'src/app/services/task.service'
import { Actions, ofType, createEffect, act } from '@ngrx/effects'
import { of } from 'rxjs'
import { switchMap, map, catchError, concatMap, tap } from 'rxjs/operators'
import * as TaskActions from './task.actions'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadAll),
      switchMap(() =>
        this.taskService.loadAll().pipe(
          map((tasks) => TaskActions.loadAllSuccess({ tasks })),
          catchError((error: HttpErrorResponse) => {
            console.log(error.error)
            return of(TaskActions.loadAllFailure())
          })
        )
      )
    )
  )

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.create),
      switchMap((actions) =>
        this.taskService.create(actions.task).pipe(
          map((task) => TaskActions.createSuccess({ task })),
          catchError((error: HttpErrorResponse) => {
            console.log(error.error)
            return of(TaskActions.createFailure())
          })
        )
      )
    )
  )

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      switchMap((actions) =>
        this.taskService.delete(actions.id).pipe(
          map((id) => TaskActions.deleteSuccess({ id })),
          catchError((error: HttpErrorResponse) => {
            console.log(error.error)
            return of(TaskActions.deleteFailure())
          })
        )
      )
    )
  )
}
