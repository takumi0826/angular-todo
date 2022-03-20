import { Component, OnInit } from '@angular/core';

import { SideMenu } from '../../../type/type';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent{
  menu: SideMenu[] = [
    { name: 'Todo', link: 'todo' },
    { name: 'Profile', link: 'profile' },
    { name: 'Sign-In', link: 'sign-in' },
    { name: 'Sign-Up', link: 'sign-up' },
  ];

  constructor() {}
}
