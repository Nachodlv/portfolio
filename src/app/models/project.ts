import {Technology} from './technologies';
import {ProjectMedia} from './project-media';

export enum ProjectDetailsPositioning {
  Left,
  Right
}

export class ProjectDetails {
  constructor(
    public title: string,
    public bulletPoints: string[],
    public positioning: ProjectDetailsPositioning = ProjectDetailsPositioning.Right) {
  }

  static constructLearningDetails(bulletPoints: string[]) : ProjectDetails {
    return new ProjectDetails('What I Learned:', bulletPoints);
  }

  static constructResponsibilitiesDetails(bulletPoints: string[]) : ProjectDetails {
    return new ProjectDetails('Responsibilities', bulletPoints, ProjectDetailsPositioning.Left);
  }
}

export class Project {
  constructor(
    public id: string,
    public title: string,
    public image: ProjectMedia,
    public technologies: Technology[],
    public media: ProjectMedia[],
    public description: string[],
    public time: { startDate: Date, finishDate?: Date, timeItTook?: TimeTaken },
    public links?: { name: string, link: string }[],
    public extraDetails?: ProjectDetails[],
    public store?: { ios: string, google: string },
    ) {
  }
}

export class TimeTaken {
  constructor(
    public years: number,
    public months: number,
    public weeks?: number,
    public days?: number
  ) {
  }
}
