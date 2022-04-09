import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { finalize, take } from 'rxjs/operators'
import { ErrorMessage } from 'src/app/constant/error-massage-const'
import { Url } from 'src/app/constant/url-const'
import { AuthService } from 'src/app/services/auth.service'
import { update } from 'src/app/store/user/user.actions'
import { User, UserInfo } from 'src/app/model/type'

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
      return ErrorMessage.REQUIRED_EMAIL
    }

    return this.email.hasError('email')
      ? ErrorMessage.FORMAT_EMAIL
      : ''
  }

  getErrorPassMessage() {
    if (this.password.hasError('required')) {
      return ErrorMessage.REQUIRED_PASSWORD
    }

    return this.password.hasError('minlength') ? ErrorMessage.MIN_LENGTH.template(4) : ''
  }

  signIn() {
    const user: User = {
      mailAddress: this.email.value,
      password: this.password.value,
    }
    this.auth.signIn(user).subscribe((res) => {
      localStorage.setItem('access_token', res.access_token)

      //リロードされないとなぜかJWT認証されないため通常遷移
      // window.location.href = '/todo'
      this.router.navigateByUrl(Url.TODO)
    })
  }

  goSingUp() {
    this.router.navigateByUrl(Url.SIGN_UP)
  }
}
