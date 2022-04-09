import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isShow = false

  constructor() {}

  start() {
    this.isShow = true
  }

  stop() {
    this.isShow = false
  }
}
