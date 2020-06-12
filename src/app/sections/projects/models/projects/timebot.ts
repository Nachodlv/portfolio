import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectTimeout = new Project('Timebot',
  'assets/images/projects/timebot/timebot.jpeg',
  [Technologies.Unity, Technologies.CSharp],
  [
    new ProjectMedia('assets/images/projects/timebot/timebot.jpeg', ProjectMediaType.IMAGE, undefined, 'Title screen'),
    new ProjectMedia('assets/images/projects/timebot/timebot2.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/timebot/timebot3.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/timebot/timebot4.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/timebot/timebot5.png', ProjectMediaType.IMAGE),
  ], [
    'Timebot was made for a game jam from gamedev.tv. The game consists in a robot that needs to test a tool to stop time ' +
    'by completing different tasks such as destroying another robots.',
    'The game was developed by four people including me. Two music composer, one artist and me as a programmer.'
  ], {
    startDate: new Date(2020, 4, 1),
    finishDate: new Date(2020, 4, 31),
    timeItTook: {years: 0, months: 1,}
  },
  undefined, [
    'Load and unload scenes asynchronously in Unity in a fast and efficient way for the different levels.',
    'Learned how use Unity\'s Tilemap for designing levels.',
    'Learned how to use Unity\'s Trail renderer and 2D lights.'
  ], [
    {name: 'Game', link: 'https://jarambarri.itch.io/timebot'},
    {name: 'Source code', link: 'https://github.com/Nachodlv/timebot'},
    {name: 'GameDev.tv submission', link: 'https://itch.io/jam/gamedevtv-community-jam/rate/658034'}
  ]);

export {projectTimeout};
