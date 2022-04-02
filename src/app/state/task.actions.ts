import { createAction } from '@ngrx/store'
import { TaskInfo } from '../type/type'

export const update = createAction('[Task Component] update',
(payload: {task: TaskInfo[]}) => payload)

export const clear = createAction('[Task Component] clear')