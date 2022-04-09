import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isValid'
})
export class IsValidPipe implements PipeTransform {

  transform(text: string) {
    return text + '!!!!';
  }

}
