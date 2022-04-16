import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { UserInfo } from './model/type'
import { AuthService } from './services/auth.service'
import { update } from './store/user/user.actions'
import { update as authUpdate } from './store/auth/auth.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-todo'
  user$ = this.userStore.pipe(select('user'))
  auth$ = this.authStore.pipe(select('auth'))
  constructor(
    private router: Router,
    private userStore: Store<{ user: UserInfo }>,
    private authStore: Store<{ auth: boolean }>,
    private auth: AuthService
  ) {
    this.auth.fetchUser().subscribe((user) => {
      localStorage.setItem('isFirstFlg', '0')
      this.authStore.dispatch(authUpdate({ isLogin: true }))
      this.userStore.dispatch(update({ user }))
    })
  }
}
