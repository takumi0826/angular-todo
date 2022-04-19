import { createFeatureSelector, createSelector } from '@ngrx/store'
import { appFeatureKey, AppState } from './app-store.reducers'

const getState = createFeatureSelector<AppState>(appFeatureKey)

export const getLoading = createSelector(getState, (state) => state.isloading)

export const getUser = createSelector(getState, (state) => state.user)

export const getLogin = createSelector(getState, (state) => state.isLogin)
