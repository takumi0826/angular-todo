import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { CreateUser } from 'src/app/model/type'
import { ErrorMessage } from 'src/app/constant/error-massage-const'
import { Store } from '@ngrx/store'
import * as AppActions from 'src/app/store/app/app-store.actions'
import * as AppSelectors from 'src/app/store/app/app-store.selectors'
import { filter, first, withLatestFrom } from 'rxjs/operators'
import { Url } from 'src/app/constant/url-const'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup
  errorMessage = ErrorMessage

  hide = true
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initSignUpForm()
  }

  initSignUpForm() {
    this.signUpForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    })
  }

  errorHandling(control: string, error: string) {
    return this.signUpForm.controls[control].hasError(error)
  }

  isVaildate() {
    return (
      this.errorHandling('name', 'required') ||
      this.errorHandling('name', 'maxlength') ||
      this.errorHandling('email', 'required') ||
      this.errorHandling('email', 'email') ||
      this.errorHandling('password', 'required') ||
      this.errorHandling('password', 'minlength')
    )
  }

  signUp() {
    if (this.isVaildate()) {
      return
    }
    const { name, email: mailAddress, password } = this.signUpForm.value
    const user: CreateUser = {
      name,
      mailAddress,
      password,
    }
    this.store.dispatch(AppActions.signUp({ user }))
  }
}
