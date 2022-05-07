import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { interval, Subject } from 'rxjs'
import { takeUntil, tap } from 'rxjs/operators'
import * as TaskActions from 'src/app/store/task/task.actions'
import * as TaskSelectors from 'src/app/store/task/task.selectors'

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit, OnDestroy {
  items = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

  itemBegin = 0
  dispCount = 3

  constructor(private store: Store) {}

  private readonly destroyed$ = new Subject()

  ngOnInit(): void {
    console.log()
    // interval(1000)
    //   .pipe(takeUntil(this.destroyed$), tap(console.log))
    //   .subscribe()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
  }

  paging(index: number) {
    this.itemBegin = this.dispCount * index
  }

  arrayChunk = ([...array], size = 1) => {
    return array.reduce(
      (acc, value, index) =>
        index % size ? acc : [...acc, array.slice(index, index + size)],
      []
    )
  }

  test() {
    this.destroyed$.next()
  }
}
