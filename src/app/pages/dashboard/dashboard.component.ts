import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import * as AppSelectors from 'src/app/store/app/app-store.selectors'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  user$ = this.store.select(AppSelectors.getUser)
  isLogin$ = this.store.select(AppSelectors.getLogin)
  constructor(private store: Store) {}
}
