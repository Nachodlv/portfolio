import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'customDate'})
export class CustomDatePipe implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return 'now';
    } else {
      return value;
    }
  }
}
