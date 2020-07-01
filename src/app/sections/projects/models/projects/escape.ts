import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectEscape = new Project(
  'escape',
  'Escape',
  'assets/images/projects/escape/escape1.gif',
  [Technologies.UnrealEngine, Technologies.Cpp],
  [
    new ProjectMedia('assets/images/projects/escape/escape1.gif', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/escape/escape2.gif', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/escape/escape3.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/escape/escape4.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/escape/escape5.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/escape/escape6.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/escape/escape7.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/escape/escape8.png', ProjectMediaType.IMAGE),
  ], [
    'A first person adventure game where the player needs to grab the golden statue to escape the dungeon. There are ' +
    'multiple rooms and in each one the player needs to solve puzzles by graving different objects around the dungeon',
    'It is my first project made with Unreal Engine and I developed it while taking a course in Udemy.'
  ], {
    startDate: new Date(2020, 2, 1),
    finishDate: new Date(2020, 2, 10),
    timeItTook: {years: 0, months: 0, weeks: 1, days: 4}
  }, undefined,
  [
    'Learned the basics of Unreal Engine and how to make a basic game with it.',
    'Learned Unreal Engine conventions when coding.',
    'Improved my C++ skills.',
  ], [
    {name: 'Code', link: 'https://gitlab.com/nachodlv/building-escape'},
    {name: 'Course:', link: 'https://www.udemy.com/course/unrealcourse/'},
  ]);

export {projectEscape};
