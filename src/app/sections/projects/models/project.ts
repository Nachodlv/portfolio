import {Technologies, Technology} from './technologies';
import {ProjectMedia, ProjectMediaType} from './project-media';

export class Project {
  constructor(public title: string,
              public image: string,
              public technologies: Technology[],
              public media: ProjectMedia[],
              public description: string[]) {
  }
}

const projectNawaiam = new Project('Nawaiam',
  'assets/images/projects/nawaiam/nawaiam2.jpeg',
  [Technologies.Unity, Technologies.CSharp],
  [
    new ProjectMedia('https://www.youtube.com/embed/KU-PuocS4kU?start=79', ProjectMediaType.VIDEO, 'Trailer'),
    new ProjectMedia('https://www.youtube.com/embed/3F2r1uruz9k', ProjectMediaType.VIDEO, 'UADE Presentation',
      'A presentation in the \'Universidad Argetina de la Empresa\''),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam1.jpg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam3.jpg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam4.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam5.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam6.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam7.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam8.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam9.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam10.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam11.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam12.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam13.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam14.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam15.jpeg', ProjectMediaType.IMAGE),
  ], [
    'I developed a 2D mobile game with Unity and C# from scratch to finish.',
    'I worked with the Facebook API for Unity, with the OAuth of Linkedin and with an external back-end that was connected to a database.',
    'I was in charge of making the code and put all assets together to make the animations. I worked in a team conformed by two more ' +
    'developer, an artist, a designer and a compose',
    'The web provided was also developed by me and another programmer.'
  ]);

export {projectNawaiam};
