import { Action, createReducer, on } from '@ngrx/store'
import { TaskInfo } from 'src/app/model/type'
import * as TaskActions from './task.actions'

export const taskFeatureKey = 'task'

export interface TaskState {
  isLoading: boolean
  tasks: TaskInfo[]
}

export const initialState: TaskState = {
  isLoading: false,
  tasks: [],
}

const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadAll, (state) => ({ ...state, isLoading: true })),
  on(TaskActions.loadAllSuccess, (state, { tasks }) => ({
    ...state,
    isLoading: false,
    tasks,
  })),
  on(TaskActions.loadAllFailure, (state) => ({
    ...state,
    isLoading: false,
  }))
)

export function reducer(state: TaskState | undefined, action: Action) {
  return taskReducer(state, action)
}
