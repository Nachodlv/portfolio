import {Technology} from './technologies';
import {ProjectMedia} from './project-media';

export class Project {
  constructor(public title: string,
              public image: string,
              public technologies: Technology[],
              public media: ProjectMedia[],
              public description: string[],
              public time: { startDate: Date, finishDate?: Date, timeItTook: { years: number, months: number } },
              public responsibilities?: string[],
              public lessonsLearned?: string[],
              public links?: { name: string, link: string }[],
              public store?: { ios: string, google: string }) {
  }
}
