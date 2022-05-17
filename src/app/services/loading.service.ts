import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isShow = new BehaviorSubject<boolean>(false)
  get isShow$() {
    return this.isShow.asObservable()
  }

  constructor() {}

  start() {
    this.isShow.next(true)
  }

  stop() {
    this.isShow.next(false)
  }
}
