import { Action, createReducer, on } from '@ngrx/store'
import { Task, UserInfo } from 'src/app/model/type'
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
  on(AppActions.signIn, (state) => ({ ...state, isLoading: true })),
  on(AppActions.signInSuccess, (state) => ({
    ...state,
    isLoading: false,
    isLogin: true,
  })),
  on(AppActions.signInFailure, (state) => ({
    ...state,
    isLoading: false,
    isLogin: false,
  })),
  on(AppActions.signUp, (state) => ({ ...state, isLoading: true })),
  on(AppActions.signUpSuccess, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(AppActions.signUpFailure, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(AppActions.appInit, (state) => initialState)
)

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action)
}
