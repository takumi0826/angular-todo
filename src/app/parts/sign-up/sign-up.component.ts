import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { CreateUser } from 'src/app/model/type'
import { ErrorMessage } from 'src/app/constant/error-massage-const'

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
    private fb: FormBuilder
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
    const user: CreateUser = {
      name: this.signUpForm.value.name,
      mailAddress: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
    }
    this.auth.signUp(user).subscribe((val) => {
      this.router.navigate(['/sign-in'])
      console.log(val)
    })
  }
}
