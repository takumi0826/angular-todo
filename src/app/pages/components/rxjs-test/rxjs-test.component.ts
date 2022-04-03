import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs'
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.scss']
})
export class RxjsTestComponent{
  constructor() { }

  rxjs() {
    const btnClicks$ = Rx.fromEvent(document.querySelector('#btn') as Element, "click");
    btnClicks$.subscribe(res => console.log(res.currentTarget));
  }

}
