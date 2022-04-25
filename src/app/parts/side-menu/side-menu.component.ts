import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { Url } from 'src/app/constant/url-const'
import { SideMenu } from 'src/app/model/type'
import * as AppActions from 'src/app/store/app/app-store.actions'
import * as AppSelectors from 'src/app/store/app/app-store.selectors'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  menu: SideMenu[] = [
    { name: 'Todo', link: Url.TODO },
    { name: 'Profile', link: Url.PROFILE },
  ]

  constructor(private store: Store, private route: Router) {}

  goSignIn() {
    this.route.navigateByUrl(Url.SIGN_IN)
  }

  goSignUp() {
    this.route.navigateByUrl(Url.SIGN_UP)
  }
}
