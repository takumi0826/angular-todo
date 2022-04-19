import { createAction, props } from '@ngrx/store'
import { TaskInfo, UserInfo } from '../../model/type'

export const getUser = createAction('[Todo Page] Load All')

export const getUserSuccess = createAction(
  '[Todo API] Load All Success',
  props<{ user: UserInfo }>()
)

export const getUserFailure = createAction('[Todo API] Load All Failure')

export const getLogin = createAction('[Todo Page] Load All')

export const getLoginSuccess = createAction('[Todo API] Load All Success')

export const getLoginFailure = createAction('[Todo API] Load All Failure')

export const appInit = createAction('[Todo API] Load All Failure')
