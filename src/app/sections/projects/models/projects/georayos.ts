import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectGeorayos = new Project('Georayos',
  'assets/images/projects/georayos/georayos.png',
  [Technologies.Flutter, Technologies.Java, Technologies.Spring, Technologies.PostgreSQL],
  [
    new ProjectMedia('assets/images/projects/georayos/georayos.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/georayos/georayos2.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/georayos/georayos3.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/georayos/georayos4.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/georayos/georayos5.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/georayos/georayos6.png', ProjectMediaType.IMAGE),
  ], [
    'Mobile application made with Flutter for a lecture at Austral University. The backend was made with Java and Spring and the ' +
    'database with PostgreSQL.',
    'It lets the user know where the storms are in South America using an API provided by the Ministry of Defense of Argentina. It also ' +
    'warns you if a storm is near a point of interest of yours'
  ], {
    startDate: new Date(2019, 2),
    finishDate: new Date(2019, 11),
    timeItTook: {years: 0, months: 9}
  }, undefined,
  [
    'Learned how to develop mobile applications with Flutter',
    'Learned different patterns for state managment in mobile applications',
    'Learned how to get and use the location provided by the phone',
    'Learned how to send push notifications'
  ]);

export {projectGeorayos};
