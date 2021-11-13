import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectWestestShowdown = new Project(
  'westest-showdown',
  'Westest Showdown',
  'assets/images/projects/westest-showdown/westest-showdown1.gif',
  [Technologies.UnrealEngine, Technologies.Cpp],
  [
    new ProjectMedia('/assets/images/projects/westest-showdown/westest-showdown2.png', ProjectMediaType.IMAGE),
    new ProjectMedia('https://www.youtube.com/embed/n5Jp5s5oy1k', ProjectMediaType.VIDEO),
    new ProjectMedia('/assets/images/projects/westest-showdown/westest-showdown3.jpg', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/westest-showdown/westest-showdown4.jpg', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/westest-showdown/westest-showdown5.jpg', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/westest-showdown/westest-showdown6.jpg', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/westest-showdown/westest-showdown7.jpg', ProjectMediaType.IMAGE),
  ], [
    'Roguelike shooter where you play as a cowboy trying to survive hordes of enemies. After each horde there are multiple ' +
    'powerups to pick up from',
    'The game was mode for the game jam Ludum Dare 48 in three days.' ,
    'The team was compose of two programmers, one 3D artist and one music composer'
  ], {
    startDate: new Date(2020, 3, 24),
    finishDate: new Date(2020, 3, 26),
    timeItTook: {years: 0, months: 0, weeks: 0, days: 3}
  }, undefined,
  [
    'Learn a lot of the GAS system in Unreal Engine',
    'Learn how to prototype games fast in Unreal Engine'
  ], [
    {name: 'Game', link: 'https://nachodlv.itch.io/westest-showdown'},
    {name: 'Code', link: 'https://gitlab.com/nachodlv/ld-48'},
  ]);

export {projectWestestShowdown};
