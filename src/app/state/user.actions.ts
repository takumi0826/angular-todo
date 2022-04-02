import { createAction } from '@ngrx/store'
import { UserInfo } from '../type/type'

export const update = createAction('[User Component] update',
(payload: UserInfo) => payload)

export const clear = createAction('[User Component] clear')