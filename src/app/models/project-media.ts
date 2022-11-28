
export class ProjectMedia {
  public source: string;

  public constructor(source: string,
                     public type: ProjectMediaType,
                     public title?: string,
                     public description?: string) {

    this.source = source;

  }

  public static getGoogleDriveUrl(imageId: string): string {
    return `https://drive.google.com/uc?export=view&id=${imageId}`;
  }
  public static getYoutubeUrl(videoId: string): string {
    return `https://www.youtube.com/embed/${videoId}`;
  }
}

export enum ProjectMediaType {
  VIDEO,
  IMAGE,
  PDF
}
