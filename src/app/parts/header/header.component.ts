import { Component, Input, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Url } from 'src/app/constant/url-const'
import { UserInfo } from 'src/app/model/type'
import { SignOutComponent } from '../sign-out/sign-out.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user!: UserInfo
  @Input() isLogin = false

  constructor(private router: Router, public dialog: MatDialog) {}

  goSignOut() {
    this.router.navigateByUrl(Url.SIGN_OUT)
  }

  openDialog() {
    this.dialog.open(SignOutComponent)
  }
}
