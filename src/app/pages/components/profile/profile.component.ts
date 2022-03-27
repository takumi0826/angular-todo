import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private auth: AuthService) {}
  username!: string

  ngOnInit(): void {
    this.auth.fetchUser().subscribe((res) => {
      this.username = res.userName
    })
  }
}
