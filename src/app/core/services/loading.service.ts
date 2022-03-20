import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isShow = false;

  constructor() {}

  start() {
    this.isShow = true;
    console.log(`isShow: ${this.isShow}`);
  }

  stop() {
    this.isShow = false;
  }
}
