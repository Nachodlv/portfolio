import {Technology} from '../technology/technologies';

export class Project {
  constructor(public title: string, public image: string, public technologies: Technology[]) {}
}
