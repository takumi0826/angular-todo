import { Action, createReducer, on } from '@ngrx/store'
import { TaskInfo } from 'src/app/model/type';
import { clear, update } from './task.actions'

export const initialState = [] as TaskInfo[];

const _taskReducer = createReducer(
  initialState,
  on(update, (_, action) => action.task),
  on(clear, (state) => initialState)
)

export function taskReducer(state: TaskInfo[] | undefined, action: Action) {
  return _taskReducer(state, action)
}
