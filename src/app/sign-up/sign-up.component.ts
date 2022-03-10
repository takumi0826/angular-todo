import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { CreateUser, User } from '../type/response/type';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.maxLength(20)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  hide = true;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  getErrorNameMessage() {
    return this.email.hasError('required') ? '名前は必須です' : '';
  }

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

  signUp() {
    const user: CreateUser = {
      name: this.name.value,
      mailAddress: this.email.value,
      password: this.password.value,
    };
    this.auth.signUp(user).subscribe(
      (val) => {
        this.router.navigateByUrl('/login');
        console.log(val);
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
