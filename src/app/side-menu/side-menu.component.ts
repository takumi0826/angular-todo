import { Component, OnInit } from '@angular/core';

import { SideMenu } from '../type/response/type';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  menu: SideMenu[] = [
    { name: 'Todo', link: 'todo' },
    { name: 'Profile', link: 'profile' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
