
export class ProjectMedia {
  public source: string;

  public constructor(source: string,
                     public type: ProjectMediaType,
                     public title?: string,
                     public description?: string) {

    this.source = source;

  }
}

export enum ProjectMediaType {
  VIDEO,
  IMAGE,
  PDF
}
