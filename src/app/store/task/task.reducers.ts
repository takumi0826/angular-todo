import { Action, createReducer, on } from '@ngrx/store'
import { TaskInfo } from 'src/app/model/type'
import * as TaskActions from './task.actions'

export const taskFeatureKey = 'task'

export interface TaskState {
  loading: boolean
  tasks: TaskInfo[]
}

export const initialState: TaskState = {
  loading: false,
  tasks: [],
}

const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadAll, (state) => ({ ...state, loading: true })),
  on(TaskActions.loadAllSuccess, (state, { tasks }) => ({
    ...state,
    loading: false,
    tasks,
  })),
  on(TaskActions.loadAllFailure, (state) => ({
    ...state,
    loading: false,
  }))
)

export function reducer(state: TaskState | undefined, action: Action) {
  return taskReducer(state, action)
}
