import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { ErrorMessage } from 'src/app/constant/error-massage-const'
import { Url } from 'src/app/constant/url-const'
import { AuthService } from 'src/app/services/auth.service'
import { User, UserInfo } from 'src/app/model/type'
import * as AppActions from 'src/app/store/app/app-store.actions'
import * as AppSelectors from 'src/app/store/app/app-store.selectors'
import { filter, first, withLatestFrom } from 'rxjs/operators'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup
  hide = true
  emailOptions: string[] = ['xxx@gmail.com', 'aaa@gmail.com', 'sss@gmail.com']
  passwordOptions: string[] = ['12345', '1234']
  errorMessage = ErrorMessage

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
    })
  }

  public errorHandling = (control: string, error: string) => {
    return this.signInForm.controls[control].hasError(error)
  }

  isVaildate() {
    return (
      this.errorHandling('email', 'required') ||
      this.errorHandling('email', 'email') ||
      this.errorHandling('password', 'required') ||
      this.errorHandling('password', 'minlength')
    )
  }

  signIn() {
    if (this.isVaildate()) {
      return
    }
    const user: User = {
      mailAddress: this.signInForm.value.email,
      password: this.signInForm.value.password,
    }
    this.store.dispatch(AppActions.login({ user }))
    this.store
      .select(AppSelectors.getLogin)
      .pipe(
        withLatestFrom(this.store.select(AppSelectors.getLoading)),
        filter(([isLogin, isLoading]) => !isLoading && isLogin),
        first()
      )
      .subscribe(() => {
        this.router.navigate([Url.TODO])
      })
  }
}
