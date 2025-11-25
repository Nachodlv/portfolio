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
import {projectMD} from './projects/motherdorito';

export class ProjectGroup {
  constructor(public name: string, public projects: Project[]) {
  }
}

export const professionalProjects = [
  new ProjectGroup('Unity', [
    projectNawaiam,
  ]),
];

export const personalProjects = [
  new ProjectGroup('Unreal Engine', [
    projectMD,
    projectNavMesh,
    projectToonTanks,
    projectWestestShowdown,
    projectNimbleGiantChallenge,
    projectEscape,
  ]),
  new ProjectGroup('Unity', [
    projectRobophaser,
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
];
