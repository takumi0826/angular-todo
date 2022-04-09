import { createAction, props } from '@ngrx/store'
import { UserInfo } from '../../model/type'

export const update = createAction(
  '[User Component] update',
  props<{ user: UserInfo }>()
)

export const clear = createAction('[User Component] clear')
