import { Directive, HostListener } from '@angular/core'

@Directive({
  selector: '[appAlert]',
})
export class AlertDirective {
  constructor() {}

  @HostListener('click', ['$event'])
  onAlert(target: any) {
    console.log(target)
    alert('directiveのテスト')
  }
}
