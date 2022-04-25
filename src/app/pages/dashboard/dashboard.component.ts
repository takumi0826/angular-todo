import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import * as AppSelectors from 'src/app/store/app/app-store.selectors'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user$ = this.store.select(AppSelectors.getUser)
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
