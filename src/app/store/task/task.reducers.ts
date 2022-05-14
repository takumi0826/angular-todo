import { Action, createReducer, on } from '@ngrx/store'
import { Task } from 'src/app/model/type'
import * as TaskActions from './task.actions'

export const taskFeatureKey = 'task'

export interface TaskState {
  isLoading: boolean
  tasks: Task[]
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
  })),
  on(TaskActions.create, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(TaskActions.createSuccess, (state, { task }) => ({
    ...state,
    isLoading: false,
    tasks: [...state.tasks, task],
  })),
  on(TaskActions.createFailure, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(TaskActions.deleteTask, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(TaskActions.deleteSuccess, (state, { id }) => ({
    ...state,
    isLoading: false,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(TaskActions.deleteFailure, (state) => ({
    ...state,
    isLoading: false,
  }))
)

export function reducer(state: TaskState | undefined, action: Action) {
  return taskReducer(state, action)
}
