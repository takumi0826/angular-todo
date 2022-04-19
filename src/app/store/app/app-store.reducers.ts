import { Action, createReducer, on } from '@ngrx/store'
import { TaskInfo, UserInfo } from 'src/app/model/type'
import * as AppActions from './app-store.actions'

export const appFeatureKey = 'app'

export interface AppState {
  isloading: boolean
  user: UserInfo
  isLogin: boolean
}

export const initialState: AppState = {
  isloading: false,
  user: {
    userId: '',
    userName: '',
  },
  isLogin: false,
}

const appReducer = createReducer(
  initialState,
  on(AppActions.getUser, (state) => ({ ...state, isloading: true })),
  on(AppActions.getUserSuccess, (state, { user }) => ({
    ...state,
    isloading: false,
    user,
  })),
  on(AppActions.getUserFailure, (state) => ({
    ...state,
    isloading: false,
  })),
  on(AppActions.getLogin, (state) => ({ ...state, isloading: true })),
  on(AppActions.getLoginSuccess, (state) => ({
    ...state,
    isloading: false,
    isLogin: true,
  })),
  on(AppActions.getLoginFailure, (state) => ({
    ...state,
    isloading: false,
  })),
  on(AppActions.appInit, (state) => initialState)
)

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action)
}
