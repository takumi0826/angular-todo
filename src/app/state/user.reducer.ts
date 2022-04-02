import { Action, createReducer, on } from '@ngrx/store'
import { UserInfo } from '../type/type'
import { clear, update } from './user.actions'

export const initialState = {
  userId: '',
  userName: ''
}

const _userReducer = createReducer(
  initialState,
  on(update, (_, action) => action),
  on(clear, (state) => initialState)
)

export function userReducer(state: UserInfo | undefined, action: Action) {
  return _userReducer(state, action)
}
