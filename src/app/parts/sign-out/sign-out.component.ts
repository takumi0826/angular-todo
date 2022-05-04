import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { Url } from 'src/app/constant/url-const'
import { ModalComponent } from 'src/app/modal/error/modal.component'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
})
export class SignOutComponent {
  constructor(
    private auth: AuthService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  signOut() {
    this.openDialog('ログアウトしました')
    this.auth.signOut()
    this.router.navigate([Url.TOP])
  }

  openDialog(message?: string) {
    this.dialog.open(ModalComponent, {
      data: {
        message,
      },
    })
  }
}
