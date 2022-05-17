import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  selected = 1
  constructor() {}

  ngOnInit(): void {}
}
