import { Injectable } from '@angular/core'
import { TaskService } from 'src/app/services/task.service'
import { Actions, ofType, createEffect, act } from '@ngrx/effects'
import { of } from 'rxjs'
import { switchMap, map, catchError, concatMap, tap } from 'rxjs/operators'
import * as TaskActions from './task.actions'

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadAll),
      switchMap(() =>
        this.taskService.loadAll().pipe(
          map((tasks) => TaskActions.loadAllSuccess({ tasks })),
          catchError((error) => of(TaskActions.loadAllFailure()))
        )
      )
    )
  )
}
