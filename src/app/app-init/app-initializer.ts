import { Store } from '@ngrx/store'
import * as AppActions from '../store/app/app-store.actions'
import { AppState } from '../store/app/app-store.reducers'

export function appInitializer(store: Store<AppState>) {
  return () =>
    new Promise((resolve) => {
      store.dispatch(AppActions.auth())
      resolve(true)
    })
}
