import { Component, ElementRef, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AuthService } from 'src/app/services/auth.service'
import * as AppActions from 'src/app/store/app/app-store.actions'
import { clear } from 'src/app/store/task/task.actions'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private store: Store) {}

  test() {
    this.store.dispatch(AppActions.auth())
  }

  onShare(el: ElementRef) {
    console.log(el)
    el.nativeElement.disabled = true
  }
}
