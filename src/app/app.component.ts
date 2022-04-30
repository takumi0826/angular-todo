import { Component, OnInit } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'
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
  constructor(
    private router: Router,
    private store: Store,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    this.store.dispatch(AppActions.auth())
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/github.svg')
    )
  }
}
