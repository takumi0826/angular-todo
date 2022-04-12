import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { Url } from 'src/app/constant/url-const'
import { SideMenu } from 'src/app/model/type'


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

  isLogin$ = this.authStore.pipe(select('auth'))


  menu: SideMenu[] = [
    { name: 'Todo', link: 'todo'},
    { name: 'Profile', link: 'profile' },
    // { name: 'Sign-In', link: 'sign-in' },
    // { name: 'Sign-Up', link: 'sign-up' },
  ]

  constructor(private authStore: Store<{auth: boolean}>, private route:Router) {}

  goSignIn() {
    this.route.navigateByUrl(Url.SIGN_IN)
  }

  goSignUp() {
    this.route.navigateByUrl(Url.SIGN_UP)
  }
}
