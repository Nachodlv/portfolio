
export class ProjectMedia {
  public source: string;
  public fullHeight: boolean = true;

  public constructor(source: string,
                     public type: ProjectMediaType,
                     public title?: string,
                     public description?: string) {

    this.source = source;

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
  PDF
}
