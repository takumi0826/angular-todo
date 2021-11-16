import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { FormControl } from '@angular/forms';
import { Login } from '../type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: Login = {
    userId: '',
    password: ''
  }
  constructor(private httpClientService: HttpClientService) { }
  

  ngOnInit(): void {}

  loginExe(login: Login) {
    console.log('前');
    this.httpClientService.login(login);
    console.log('後');
  }
}
