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
import {projectWestestShowdown} from './projects/westest-showdown';
import {projectCyberwalk} from './projects/cyberwalk';
import {projectRobophaser} from './projects/robophaser';
import {projectForgeMadness} from './projects/forge-madness';
import {projectNavMesh} from './projects/navmesh';

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
    new ProjectGroup('Unreal Engine', [
      projectNavMesh,
      projectToonTanks,
      projectWestestShowdown,
      projectNimbleGiantChallenge,
      projectEscape,
    ]),
    new ProjectGroup('Unity', [
      projectRobophaser,
      projectNawaiam,
      projectTimebot,
      projectCyberwalk,
      projectLupe,
      projectOverjammed,
      projectGloomhaven,
      projectRetry,
    ]),
    new ProjectGroup('Godot', [
      projectForgeMadness
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
    new ProjectGroup('Game Jams', [
      projectWestestShowdown,
      projectCyberwalk,
      projectTimebot,
      projectForgeMadness,
      projectLupe,
      projectOverjammed,
    ]),
    new ProjectGroup('Side projects', [
      projectNavMesh,
      projectToonTanks,
      projectNimbleGiantChallenge,
      projectGloomhaven,
      projectRetry,
      projectEscape,
      projectSunbox,
    ]),
    new ProjectGroup('University', [
      projectRobophaser,
      projectAngryShips,
      projectBookie,
      projectGeorayos,
      projectStarShip,
    ])
  ]);
