import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: { years: number, months: number }): string {
    let word: string = value.years === 0 ? '' : `${value.years} ${(value.years === 1 ? 'year' : 'years')}`;
    word += value.months === 0 ? '' : `${value.months} ${(value.months === 1 ? 'month' : 'months')}`;
    return word;
  }
}
