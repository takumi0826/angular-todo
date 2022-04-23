import { Action, createReducer, on } from '@ngrx/store'
import { TaskInfo, UserInfo } from 'src/app/model/type'
import * as AppActions from './app-store.actions'

export const appFeatureKey = 'app'

export interface AppState {
  isLoading: boolean
  user: UserInfo
  isLogin: boolean
}

export const initialState: AppState = {
  isLoading: false,
  user: {
    userId: '',
    userName: '',
  },
  isLogin: false,
}

const appReducer = createReducer(
  initialState,
  on(AppActions.auth, (state) => ({ ...state, isLoading: true })),
  on(AppActions.authSuccess, (state, { user }) => ({
    ...state,
    isLoading: false,
    user,
  })),
  on(AppActions.authFailure, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(AppActions.login, (state) => ({ ...state, isLoading: true })),
  on(AppActions.loginSuccess, (state) => ({
    ...state,
    isLoading: false,
    isLogin: true,
  })),
  on(AppActions.loginFailure, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(AppActions.appInit, (state) => initialState)
)

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action)
}
