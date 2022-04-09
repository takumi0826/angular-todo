import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private auth: AuthService) {}

  test() {
    this.auth.fetchUser().subscribe()
  }
}
