import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectNawaiam = new Project('Nawaiam',
  'assets/images/projects/nawaiam/nawaiam2.png',
  [Technologies.Unity, Technologies.CSharp, Technologies.Facebook],
  [
    new ProjectMedia('https://www.youtube.com/embed/KU-PuocS4kU?start=79', ProjectMediaType.VIDEO, 'Trailer'),
    new ProjectMedia('https://www.youtube.com/embed/3F2r1uruz9k', ProjectMediaType.VIDEO, 'UADE Presentation',
      'A presentation in the \'Universidad Argetina de la Empresa\''),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam1.jpg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam3.jpg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam5.jpeg', ProjectMediaType.IMAGE, undefined, 'Multiple levels'),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam6.jpeg', ProjectMediaType.IMAGE, undefined, 'Multiple decisions to make'),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam7.jpeg', ProjectMediaType.IMAGE, undefined, 'Character creation'),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam8.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam9.jpeg', ProjectMediaType.IMAGE, undefined, 'Facebook API'),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam10.jpeg', ProjectMediaType.IMAGE,
      'Mini game', 'One of the two mini games inside the game.'),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam11.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam12.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam13.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam14.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/nawaiam/nawaiam15.jpeg', ProjectMediaType.IMAGE,
      'Mini game', 'One of the two mini games inside the game'),
  ], [
    'Nawaiam is a 2D / 2.5D mobile game made with Unity when I was working at Sirius System. I worked with the Facebook API for Unity, ' +
    'with the OAuth of LinkedIn and with an external back-end that was connected to a database. I was in charge of making the code and ' +
    'put all assets together to make the animations. I worked in a team conformed by two more developers, an artist, a designer and a ' +
    'composer.',
    'The game consists on making decisions and base on those decisions it runs an algorithm to determine the personality of the user. ' +
    'The objective of the game is that companies could use it to make interviews more effective.'
  ], {
    startDate: new Date(2019, 1),
    finishDate: new Date(2019, 8),
    timeItTook: {years: 0, months: 8}
  },
  [
    'I developed this game with Unity and C# from scratch to finish.',
    'I worked with the Facebook API for Unity, with the OAuth of LinkedIn and with an external back-end that was connected to a database.',
    'I was in charge of making the code and put all assets together to make the animations. I worked in a team conformed by two more ' +
    'developers, an artist, a designer and a composer',
    'The web provided was also developed by me and another programmer.'
  ], undefined, [
    {name: 'Website', link: 'https://www.nawaiam.com/'},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/company/nawaiam/'}
  ], {ios: '', google: 'https://play.google.com/store/apps/details?id=com.Sirius.Nawaiam'});

export {projectNawaiam};
