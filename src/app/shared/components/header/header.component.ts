import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { UserInfo } from 'src/app/type/type'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName?: string;

  constructor(private router: Router, private store: Store<{ user: UserInfo }>) {
    this.store.select('user').subscribe((res) => {
      this.userName = res.userName;
    })
  }

  ngOnInit(): void {
  }

  routerLink(url: string) {
    this.router.navigateByUrl(url)
  }
}
