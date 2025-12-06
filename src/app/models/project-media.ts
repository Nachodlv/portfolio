
export class ProjectMedia {
  public source: string;
  public fullHeight: boolean = true;
  public type: ProjectMediaType = ProjectMediaType.IMAGE;
  public title: string;
  public description: string;

  public constructor(source: string,
                     type: ProjectMediaType = ProjectMediaType.IMAGE,
                     title?: string,
                     description?: string) {

    this.source = source;
    this.type = type;
    this.title = title;
    this.description = description;
  }

  public static newTextMedia(title: string, description?: string) : ProjectMedia {
    return new ProjectMedia(undefined, ProjectMediaType.TEXT, title, description);
  }

  public static getGoogleDriveUrl(imageId: string, width: number = 1000): string {
    return `https://lh3.googleusercontent.com/d/${imageId}=w${width}`;
  }
  public static getYoutubeUrl(videoId: string): string {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  public setFullHeight(fullHeight: boolean) : ProjectMedia {
    let newProjectMedia : ProjectMedia = {... this};
    newProjectMedia.fullHeight = fullHeight;
    return newProjectMedia;
  }
}

export enum ProjectMediaType {
  VIDEO,
  IMAGE,
  PDF,
  TEXT
}
