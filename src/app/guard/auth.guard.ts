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

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('access_token')
    if (!token) {
      this.route.navigateByUrl('sign-in')
    }
    return !!token
  }
}
