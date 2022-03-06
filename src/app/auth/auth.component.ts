import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { User } from '../type/response/type';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
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

  login() {
    const user: User = {
      mailAddress: this.email.value,
      password: this.password.value,
    };
    this.auth.login(user).subscribe(
      (val) => {
        localStorage.setItem('access_token', val.access_token);
        this.router.navigateByUrl('/todo');
        console.log(val);
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }
}
