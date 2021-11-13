import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectCyberwalk = new Project(
  'cyberwalk',
  'Cyberwalk 2049',
  'assets/images/projects/cyberwalk/cyberwalk.gif',
  [Technologies.Unity, Technologies.CSharp],
  [
    new ProjectMedia('assets/images/projects/cyberwalk/cyberwalk2.jpg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/cyberwalk/cyberwalk3.jpg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/cyberwalk/cyberwalk4.jpg', ProjectMediaType.IMAGE),
  ], [
    '2D infinite runner where you need to grab powerups along the way and pu them inside your backpack. If any of those powerups falloff' +
    'from it then you will lose that upgrade. The objective of the game is to walk as far as possible while avoiding the enemies',
    'This games was made for the game jam Ludum Dare 49 in a three days span',
    'The team was compose of two programmers, one artist and one game designer'
  ], {
    startDate: new Date(2021, 11, 2),
    finishDate: new Date(2021, 11, 4),
    timeItTook: {years: 0, months: 0, weeks: 0, days: 3}
  },
  undefined,
  undefined,
  [
    {name: 'Game', link: 'https://nachodlv.itch.io/cyberwalk-2049'},
    {name: 'Code', link: 'https://github.com/Nachodlv/Cyberwalk'},
  ]);

export {projectCyberwalk};
