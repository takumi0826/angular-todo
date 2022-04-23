import { createAction, props } from '@ngrx/store'
import { TaskInfo, UserInfo } from '../../model/type'

export const auth = createAction('[App] auth')

export const authSuccess = createAction(
  '[App] authSuccess',
  props<{ user: UserInfo }>()
)

export const authFailure = createAction('[App] authFailure')

export const login = createAction('[App] login')

export const loginSuccess = createAction('[App] loginSuccess')

export const loginFailure = createAction('[App] loginFailure')

export const appInit = createAction('[App] appInit')
