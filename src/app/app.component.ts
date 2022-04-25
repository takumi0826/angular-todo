import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { AuthService } from './services/auth.service'
import * as AppActions from './store/app/app-store.actions'
import { appFeatureKey } from './store/app/app-store.reducers'
import * as AppSelectors from './store/app/app-store.selectors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-todo'
  isLogin$ = this.store.select(AppSelectors.getLogin)
  isLoading$ = this.store.select(AppSelectors.getLoading)
  visible = false
  constructor(private router: Router, private store: Store) {
    this.store.dispatch(AppActions.auth())
  }
}
