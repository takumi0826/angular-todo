import { createAction, props } from '@ngrx/store'
import { Task, TaskResponse } from '../../model/type'

export const loadAll = createAction('[Task] loadAll')

export const loadAllSuccess = createAction(
  '[Task] loadAllSuccess',
  props<{ tasks: Task[] }>()
)

export const loadAllFailure = createAction('[Task] loadAllFailure')

export const create = createAction(
  '[Task] create',
  props<{ task: Pick<Task, 'title' | 'isDone'> }>()
)

export const createSuccess = createAction(
  '[Task] createSuccess',
  props<{ task: Task }>()
)

export const createFailure = createAction('[Task] createFailure')

export const clear = createAction('[Task] clear')
