import { Observable, of } from 'rxjs'

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
import {
  concatMap,
  filter,
  first,
  map,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs/operators'
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
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // return this.store.select(AppSelectors.getLogin).pipe(
    //   withLatestFrom(this.store.select(AppSelectors.getLoading)),
    //   filter(([_, isLoading]) => !isLoading),
    //   tap((login) => console.log(login)),
    //   map(([isLogin, _]) => isLogin)
    // )

    if (await this.auth.isAuthenticated()) {
      return true
    } else {
      this.route.navigate([Url.TOP])
      return false
    }
  }
}
