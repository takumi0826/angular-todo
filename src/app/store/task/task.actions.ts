import { createAction, props } from '@ngrx/store'
import { TaskInfo } from '../../model/type'

export const loadAll = createAction('[Todo Page] Load All')

export const loadAllSuccess = createAction(
  '[Todo API] Load All Success',
  props<{ tasks: TaskInfo[] }>()
)

export const loadAllFailure = createAction('[Todo API] Load All Failure')

export const load = createAction('[Todo Page] Load', props<{ id: number }>())

export const loadSuccess = createAction(
  '[Todo API] Load Success',
  props<{ task: TaskInfo }>()
)

export const loadFailure = createAction('[Todo API] Load Failure')

export const clear = createAction('[Todo API] clear')
