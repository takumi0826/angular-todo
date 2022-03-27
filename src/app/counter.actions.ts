import { createAction } from '@ngrx/store'

export const init = createAction(
  '[Counter Component] init',
  (payload: { count: number }) => ({ payload })
)
export const increment = createAction('[Counter Component] Increment')
export const decrement = createAction('[Counter Component] Decrement')
export const reset = createAction('[Counter Component] Reset')
