import { Observable } from 'rxjs'

import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { AuthService } from '../services/auth.service'
import { UserInfo } from '../model/type'
import { select, Store } from '@ngrx/store'
import * as AppSelectors from '../store/app/app-store.selectors'
import { concatMap, map, withLatestFrom } from 'rxjs/operators'
import { Url } from '../constant/url-const'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private route: Router,
    private store: Store
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // let loginState = false
    // this.store
    //   .select(AppSelectors.getLogin)
    //   .subscribe((isLogin) => (loginState = isLogin))
    // return loginState
    if (!localStorage.getItem('access_token')) {
      this.route.navigateByUrl(Url.TOP)
    }
    return true
  }
}
