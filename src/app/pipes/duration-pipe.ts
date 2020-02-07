import {Pipe, PipeTransform} from '@angular/core';
import {TimeTaken} from '../sections/projects/models/project';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: TimeTaken): string {
    let word: string = value.years === 0 ? '' : `${value.years} ${(value.years === 1 ? 'year' : 'years')}`;
    word += value.months === 0 ? '' : `${value.months} ${(value.months === 1 ? 'month' : 'months')}`;
    word += value.weeks !== undefined && value.weeks === 0 ? '' : `${value.weeks} ${(value.weeks === 1 ? 'week' : 'weeks')}`;
    return word;
  }
}
