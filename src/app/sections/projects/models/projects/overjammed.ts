import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectOverjammed = new Project('Overjammed',
  'assets/images/projects/overjammed/overjammed.png',
  [Technologies.Unity, Technologies.CSharp],
  [
    new ProjectMedia('assets/images/projects/overjammed/overjammed2.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/overjammed/overjammed3.png', ProjectMediaType.IMAGE, undefined, 'Title screen'),
    new ProjectMedia('assets/images/projects/overjammed/overjammed4.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/overjammed/overjammed5.png', ProjectMediaType.IMAGE),
  ], [
    'Overjammed was made in 72 hours for a Game Jam called Ludum Dare. The game is about taking care of a group of developers that are ' +
    'making a game for a Game Jam.',
    'Once the game is finished you can continue playing and the difficulty will increase every time you win',
    'The game was developed by four people including me. One music composer, two artists and me as a programmer'
  ], {
    startDate: new Date(2020, 3, 18),
    finishDate: new Date(2020, 3, 20),
    timeItTook: {years: 0, months: 0, days: 3}
  },
  undefined, [
    'Learned how to prototype games fast and efficiently',
    'Learned how to get assets, such as music and art, and integrated with Unity',
  ], [
    {name: 'Game', link: 'https://nachodlv.itch.io/overjammed'},
    {name: 'Source code', link: 'https://github.com/Nachodlv/overjammed'},
    {name: 'Ludum Dare submission', link: 'https://ldjam.com/events/ludum-dare/46/overjammed'}
  ]);

export {projectOverjammed};
