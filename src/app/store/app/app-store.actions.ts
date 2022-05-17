import { createAction, props } from '@ngrx/store'
import { CreateUser, Task, User, UserInfo } from '../../model/type'

export const auth = createAction('[App] auth')

export const authSuccess = createAction(
  '[App] authSuccess',
  props<{ user: UserInfo }>()
)

export const authFailure = createAction('[App] authFailure')

export const signIn = createAction('[App] signIn', props<{ user: User }>())

export const signInSuccess = createAction('[App] signInSuccess')

export const signInFailure = createAction('[App] signInFailure')

export const signUp = createAction(
  '[App] signUp',
  props<{ user: CreateUser }>()
)

export const signUpSuccess = createAction('[App] signUpSuccess')

export const signUpFailure = createAction('[App] signUpFailure')

export const appInit = createAction('[App] appInit')
