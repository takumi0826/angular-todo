import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core'
import { Subject } from 'rxjs'
import { first } from 'rxjs/operators'

@Directive({
  selector: '[appSingleClick]',
})
export class SingleClickDirective implements OnInit {
  @Output() singleClick = new EventEmitter()

  target$ = new Subject()

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.target$.pipe(first()).subscribe(() => {
      this.singleClick.emit(this.el)
    })
  }

  @HostListener('click')
  onSingleClick() {
    this.target$.next()
  }
}
