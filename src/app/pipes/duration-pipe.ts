import {Pipe, PipeTransform} from '@angular/core';
import {TimeTaken} from '../models/project';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {

  private static getTimeTaken(value: number, period: string): string {
    return value === undefined || value === 0 ? '' : `${value} ${(value === 1 ? period : `${period}s`)} `;
  }

  transform(value?: TimeTaken): string {
    if (!value) {
      return '';
    }
    const timeTaken: string = DurationPipe.getTimeTaken(value.years, 'year') +
      DurationPipe.getTimeTaken(value.months, 'month') +
      DurationPipe.getTimeTaken(value.weeks, 'week') +
      DurationPipe.getTimeTaken(value.days, 'day');

    return `(${timeTaken.substring(0, timeTaken.length - 1)})`;
  }
}
