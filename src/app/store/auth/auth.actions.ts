import { createAction, props } from '@ngrx/store'

export const update = createAction(
  '[Auth Component] update',
  props<{ isLogin: boolean }>()
)

export const clear = createAction('[Auth Component] clear')
