import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { UserInfo } from 'src/app/model/type'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user!: UserInfo
  constructor(private router: Router) {}

  routerLink(url: string) {
    this.router.navigateByUrl(url)
  }
}
