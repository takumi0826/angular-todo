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
import { Store } from '@ngrx/store'
import { update } from '../store/auth/auth.actions'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private route: Router,
    private authStore: Store<{ auth: boolean }>
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isLogin = false;
    this.authStore.select('auth').subscribe(res => isLogin = res)

    return isLogin
  }
}
