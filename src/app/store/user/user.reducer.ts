import { Action, createReducer, on } from '@ngrx/store'
import { UserInfo } from 'src/app/model/type'
import { clear, update } from './user.actions'

export const initialState: UserInfo = {
  userId: '',
  userName: ''
}

const _userReducer = createReducer(
  initialState,
  on(update, (state, payload) => {
    return payload.user ? payload.user: initialState
  }),
  on(clear, (state) => initialState)
)

export function userReducer(state: UserInfo | undefined, action: Action) {
  return _userReducer(state, action)
}
