import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectBookie = new Project('Bookie',
  'assets/images/projects/bookie/bookie.png',
  [Technologies.Unity, Technologies.CSharp], // TODO change technologies
  [
    new ProjectMedia('assets/images/projects/bookie/bookie1.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/bookie/bookie2.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/bookie/bookie3.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/bookie/bookie4.png', ProjectMediaType.IMAGE),
  ], [
    'Mobile application for rating books. Users can review books and see other users reviews. Users can follow each other. Books can ' +
    'be searched by taking a photo to the ISBN code of the book',
    'The application was made together with two partners for Mobile Computing in Reutlingen University'
  ], {
    startDate: new Date(2019, 11, 20),
    finishDate: new Date(2020, 0, 5),
    timeItTook: {years: 0, months: 1}
  }, undefined,
  [
    'I learned how to program in Kotlin and Android',
    'Learned how to use and manage the camera in Android',
    'I learned how to manage state in Android with an external database'
  ], [
    {name: 'Code', link: 'https://github.com/nachodlv/bookie'}
  ]);

export {projectBookie};
