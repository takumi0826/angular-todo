import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username?: string

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = 'aaa'
  }

  routerLink(url: string) {
    this.router.navigateByUrl(url)
  }
}
