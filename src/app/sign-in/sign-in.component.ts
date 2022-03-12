import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { UserInfo } from '../type';
import { User } from '../type/response/type';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  hide = true;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  getErrorMailMessage() {
    if (this.email.hasError('required')) {
      return 'メールアドレスは必須です';
    }

    return this.email.hasError('email')
      ? 'メールアドレスの形式で入力してください'
      : '';
  }

  getErrorPassMessage() {
    if (this.password.hasError('required')) {
      return 'パスワードは必須です';
    }

    return this.password.hasError('minlength') ? '最小は4文字です' : '';
  }

  signIn() {
    const user: User = {
      mailAddress: this.email.value,
      password: this.password.value,
    };
    this.auth.signIn(user).subscribe(
      async (val) => {
        localStorage.setItem('access_token', val.access_token);

        //リロードされないとなぜかJWT認証されないため通常遷移
        window.location.href = '/todo';
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  routerLink(url: string) {
    this.router.navigateByUrl(url);
  }
}
