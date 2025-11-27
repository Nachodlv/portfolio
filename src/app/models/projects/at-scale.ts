import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectAtScale = new Project(
  'at-scale',
  'At Scale',
  'https://img.itch.zone/aW1nLzE3NDQ4MTI1LnBuZw==/original/06RCog.png',
  [Technologies.Godot],
  [
    new ProjectMedia('https://img.itch.zone/aW1nLzE3NDQ4MTI1LnBuZw==/original/06RCog.png', ProjectMediaType.IMAGE),
    new ProjectMedia('https://img.itch.zone/aW1nLzE3NDQ5NDA5LnBuZw==/original/n6rhnW.png', ProjectMediaType.IMAGE),
    new ProjectMedia('https://img.itch.zone/aW1nLzE3NDQ4NjUwLnBuZw==/original/3CoY4D.png', ProjectMediaType.IMAGE),
    new ProjectMedia('https://img.itch.zone/aW1nLzE3NDQ5MjE5LnBuZw==/original/OYtttn.png', ProjectMediaType.IMAGE),
  ], [
    'Welcome to At Scale, a captivating game where your creativity and spatial awareness are put to the test! In this ' +
    'unique experience, you’ll be tasked to place various objects across themed levels, each presenting its own ' +
    'challenges and intricacies. ',

    'As you progress, the scale of the scenes grows, expanding your canvas and adding complexity to your designs. ' +
    'You\'ll need to carefully consider the proximity and placement of each object to maintain balance and harmony ' +
    'within the scene and score points. Whether arranging food and tableware on a table or strategically positioning ' +
    'house appliances in an empty house, every decision counts!',

    'Stamp-ede is a game made for the game jam Game Maker\'s Toolkit 2024. Its theme was "Built to scale". The game ' +
    'was made in the lapse of 4 days.'
  ], {
    startDate: new Date(2024, 7, 17),
    finishDate: new Date(2024, 7, 20),
    timeItTook: {years: 0, months: 0, weeks: 0, days: 4}
  },
  [
    {name: 'Game', link: 'https://zarpadoenlata.itch.io/at-scale'},
    {name: 'Code', link: 'https://gitlab.com/nachodlv/ludum-dare-53'},
  ]);

export {projectAtScale};
