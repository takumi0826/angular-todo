import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AuthService } from 'src/app/services/auth.service'
import { clear } from 'src/app/store/task/task.actions'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private taskStore: Store) {}

  test() {
    this.taskStore.dispatch(clear())
  }
}
