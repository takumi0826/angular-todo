import { createAction, props } from '@ngrx/store'
import { TaskInfo } from '../../model/type'

export const loadAll = createAction('[Task] loadAll')

export const loadAllSuccess = createAction(
  '[Task] loadAllSuccess',
  props<{ tasks: TaskInfo[] }>()
)

export const loadAllFailure = createAction('[Task] loadAllFailure')

export const clear = createAction('[Task] clear')
