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
    this.auth.signIn(user).subscribe((res) => {
      localStorage.setItem('access_token', res.access_token)
      this.store.dispatch(AppActions.auth())
      this.router.navigateByUrl(Url.TODO)
    })
  }
}
