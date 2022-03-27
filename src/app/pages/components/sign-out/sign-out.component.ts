import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AuthService } from '../../services/auth.service'
import { ModalComponent } from '../modal/modal.component'

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
})
export class SignOutComponent {
  constructor(private auth: AuthService, public dialog: MatDialog) {}

  signOut() {
    this.openDialog('ログアウトしました')
    this.auth.signOut()
  }

  openDialog(message?: string) {
    this.dialog.open(ModalComponent, {
      data: {
        message,
      },
    })
  }
}
