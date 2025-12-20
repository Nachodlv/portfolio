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
import {projectStampede} from "./projects/stamp-ede";
import {projectAtScale} from "./projects/at-scale";
import {projectD5} from "./projects/project-d5";
import {projectFortnite} from "./projects/fortnite";
import {projectExtractionShooter} from "./projects/extraction-shooter";
import {talkEva2023} from "./projects/talks/eva-2023";
import {imageCampus2023} from "./projects/talks/image-campus-2023";

export class ProjectGroup {
  constructor(public name: string, public projects: Project[]) {
  }
}

const professionalProjects = new ProjectGroup('Professional Projects', [
  projectD5,
  projectFortnite,
  projectExtractionShooter,
  projectNawaiam,
]);

const personalProjects = new ProjectGroup('Personal Projects', [
  projectMD,
  projectNavMesh,

  projectRobophaser,
  projectAtScale,
  projectStampede,
  projectCyberwalk,
  projectWestestShowdown,
  projectOverjammed,
  projectLupe,
  projectTimebot,
  projectForgeMadness,

  projectGloomhaven,
  projectAngryShips,
  projectBookie,
  projectSunbox,
  projectGeorayos,

  // projectToonTanks,
  // projectNimbleGiantChallenge,
  // projectEscape,
  projectRetry,
  projectStarShip,
]);

const talks = new ProjectGroup('talks', [
  talkEva2023,
  imageCampus2023,
]);

export const professionalGroup = [
  professionalProjects,
];

export const personalGroup = [
  personalProjects,
];

export const talksGroup = [
  talks,
];

export const allProjects = [
  professionalProjects,
  talks,
  personalProjects,
];
