import { Action, createReducer, on } from '@ngrx/store'
import { clear, update } from './auth.actions'

export const initialState: boolean = false

const _authReducer = createReducer(
  initialState,
  on(update, (state, payload) => payload.isLogin),
  on(clear, (state) => initialState)
)

export function authReducer(state: boolean, action: Action) {
  return _authReducer(state, action)
}
