import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project, ProjectDetails} from '../project';

const projectBookie = new Project(
  'bookie',
  'Bookie',
  'assets/images/projects/bookie/bookie1.png',
  [Technologies.Android, Technologies.Kotlin, Technologies.Spring, Technologies.Mongo],
  [
    new ProjectMedia('/assets/images/projects/bookie/bookie1.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/bookie/bookie2.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/bookie/bookie3.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/bookie/bookie4.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/bookie/bookie5.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/bookie/bookie6.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/bookie/bookie7.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/bookie/bookie8.png', ProjectMediaType.IMAGE),
  ], [
    'Mobile application for rating books. Users can review books and see other users reviews. Users can follow each other. Books can ' +
    'be searched by taking a photo to the ISBN code of the book.',
    'The application was made together with two partners for Mobile Computing in Reutlingen University, Germany.'
  ], {
    startDate: new Date(2019, 11, 20),
    finishDate: new Date(2020, 0, 5),
    timeItTook: {years: 0, months: 1}
  },
  [
    {name: 'Code', link: 'https://github.com/nachodlv/bookie'}
  ],
  [
    ProjectDetails.ConstructLearningDetails(
      [
        'I learned how to program in Kotlin and Android',
        'Learned how to use and manage the camera in Android',
        'I learned how to manage state in Android with an external database'
      ]
    )
  ]);

export {projectBookie};
