import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { UserInfo } from './model/type'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-todo'
  user$ = this.store.select('user')

  constructor(
    private router: Router,
    private store: Store<{ user: UserInfo }>
  ) {
  }
}
