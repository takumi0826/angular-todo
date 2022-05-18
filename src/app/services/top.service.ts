import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TopService {
  private tabIndex = new BehaviorSubject<number>(0)
  get tabIndex$() {
    return this.tabIndex.asObservable()
  }

  constructor() {}

  public selectIndex(num: number) {
    this.tabIndex.next(num)
  }
}
