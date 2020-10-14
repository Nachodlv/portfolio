﻿import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectNimbleGiantChallenge = new Project(
  'nimble-giant-challenge',
  'Nimble Giant Challenge',
  '/assets/images/projects/nimble-giant-challenge/nimble-giant-challenge1.gif',
  [Technologies.UnrealEngine, Technologies.Cpp],
  [
    new ProjectMedia('/assets/images/projects/nimble-giant-challenge/nimble-giant-challenge1.gif', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/nimble-giant-challenge/nimble-giant-challenge2.gif', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/nimble-giant-challenge/nimble-giant-challenge3.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/nimble-giant-challenge/nimble-giant-challenge4.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/nimble-giant-challenge/nimble-giant-challenge5.pdf', ProjectMediaType.PDF),
  ], [
    'This game was made as a challenge for Nimble Giant game programmer role. It\'s a multiplayer shooter where you need to shoot the ' +
    'colored cubes. When a cube is hit is destroyed and all cubes of the same color next to this one will also be destroyed. The more ' +
    'cubes you destroy with one bullet, the more score you will earn',
    'All the game logic was made with C++ and it was used the \"First Person\" template in C++ provided by Unreal Engine'
  ], {
    startDate: new Date(2020, 8, 29),
    finishDate: new Date(2020, 9, 12),
    timeItTook: {years: 0, months: 0, weeks: 2}
  },
  undefined, [
    'Learned how to build a multiplayer game in Unreal Engine',
    'Learned how to manage the UI with C++'
  ], [
    {name: 'Source code', link: 'https://gitlab.com/nachodlv/nimblegiant'},
  ]);

export {projectNimbleGiantChallenge};
