﻿import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectToonTanks = new Project(
  'toon-tanks',
  'Toon Tanks',
  'assets/images/projects/toon-tanks/toon-tanks1.gif',
  [Technologies.UnrealEngine, Technologies.Cpp],
  [
    new ProjectMedia('/assets/images/projects/toon-tanks/toon-tanks1.gif', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/toon-tanks/toon-tanks2.gif', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/toon-tanks/toon-tanks3.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/toon-tanks/toon-tanks4.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/toon-tanks/toon-tanks5.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/toon-tanks/toon-tanks6.png', ProjectMediaType.IMAGE),
  ], [
    'Toon tanks is a 3D multiplayer game made with Unreal where players need to advance through enemies to get to the end of the level. ' +
    'Multiple health packs are placed in the level that will heal the player when collision with.',
    'The game was made to learn how multiplayer in Unreal works. It was mostly made with C++'
  ], {
    startDate: new Date(2020, 10, 1),
    finishDate: new Date(2020, 10, 31),
    timeItTook: {years: 0, months: 1}
  },
  undefined, [
    'Improved my knowledge of multiplayer with Unreal',
    'Learned basic AI behavior'
  ], [
    {name: 'Source code', link: 'https://gitlab.com/nachodlv/toon-tanks'},
  ]);

export {projectToonTanks};
