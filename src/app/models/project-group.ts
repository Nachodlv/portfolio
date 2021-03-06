import {Project} from './project';
import {projectAngryShips} from './projects/angry-ships';
import {projectGloomhaven} from './projects/gloomhaven';
import {projectNawaiam} from './projects/nawaiam';
import {projectOverjammed} from './projects/overjammed';
import {projectRetry} from './projects/retry';
import {projectTimebot} from './projects/timebot';
import {projectEscape} from './projects/escape';
import {projectNimbleGiantChallenge} from './projects/nimble-giant-challenge';
import {projectBookie} from './projects/bookie';
import {projectGeorayos} from './projects/georayos';
import {projectStarShip} from './projects/starships';
import {projectSunbox} from './projects/sunbox';
import {projectLupe} from './projects/lupe';
import {projectToonTanks} from './projects/toon-tanks';

export class ProjectGroup {
  constructor(public name: string, public projects: Project[]) {
  }
}

export class GroupCategory {
  constructor(public id: string, public name: string, public projectGroups: ProjectGroup[]) {
  }
}

export const engineCategory: GroupCategory = new GroupCategory(
  'engine',
  'Engine',
  [
    new ProjectGroup('Unity', [
      projectNawaiam,
      projectTimebot,
      projectLupe,
      projectOverjammed,
      projectGloomhaven,
      projectRetry,
    ]),
    new ProjectGroup('Unreal Engine', [
      projectToonTanks,
      projectNimbleGiantChallenge,
      projectEscape,
    ]),
    new ProjectGroup('Other', [
      projectAngryShips,
      projectBookie,
      projectSunbox,
      projectGeorayos,
      projectStarShip,
    ])
  ]
);

export const purposeCategory = new GroupCategory(
  'purpose',
  'Purpose',
  [
    new ProjectGroup('Work', [
      projectNawaiam
    ]),
    new ProjectGroup('Game Jam', [
      projectTimebot,
      projectLupe,
      projectOverjammed,
    ]),
    new ProjectGroup('Challenge', [
      projectNimbleGiantChallenge,
    ]),
    new ProjectGroup('Side project', [
      projectToonTanks,
      projectGloomhaven,
      projectRetry,
      projectEscape,
      projectSunbox,
    ]),
    new ProjectGroup('University', [
      projectAngryShips,
      projectBookie,
      projectGeorayos,
      projectStarShip,
    ])
  ]);
