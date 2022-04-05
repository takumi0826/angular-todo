import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { finalize, take } from 'rxjs/operators'
import { LoadingService } from 'src/app/core/services/loading.service'
import { update } from 'src/app/state/user.actions'

import { User, UserInfo } from '../../../type/type'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(4)])
  hide = true

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store<{ user: UserInfo }>
  ) {}

  getErrorMailMessage() {
    if (this.email.hasError('required')) {
      return 'メールアドレスは必須です'
    }

    return this.email.hasError('email')
      ? 'メールアドレスの形式で入力してください'
      : ''
  }

  getErrorPassMessage() {
    if (this.password.hasError('required')) {
      return 'パスワードは必須です'
    }

    return this.password.hasError('minlength') ? '最小は4文字です' : ''
  }

  signIn() {
    const user: User = {
      mailAddress: this.email.value,
      password: this.password.value,
    }
    this.auth.signIn(user).subscribe(
      (res) => {
        localStorage.setItem('access_token', res.access_token)

        this.auth.fetchUser().subscribe((v) => {
          this.store.dispatch(update(v))
        })

        //リロードされないとなぜかJWT認証されないため通常遷移
        // window.location.href = '/todo'
        this.router.navigateByUrl('/todo')
      }
    )
  }

  routerLink(url: string) {
    this.router.navigateByUrl(url)
  }
}
