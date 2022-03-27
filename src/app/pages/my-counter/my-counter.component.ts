import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { increment, decrement, reset, init } from 'src/app/counter.actions'
import { TaskService } from '../services/task.service'

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>

  constructor(
    private store: Store<{ count: number }>,
    private task: TaskService
  ) {
    this.count$ = this.store.select('count')
  }

  ngOnInit(): void {
    this.task.getTask().subscribe((res) => {
      this.store.dispatch(init({ count: res.length }))
    })
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
