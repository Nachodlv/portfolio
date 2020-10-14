import {Component, HostBinding, OnInit} from '@angular/core';
import {Project} from './models/project';
import {projectNawaiam} from './models/projects/nawaiam';
import {projectSunbox} from './models/projects/sunbox';
import {projectGeorayos} from './models/projects/georayos';
import {projectGloomhaven} from './models/projects/gloomhaven';
import {projectRetry} from './models/projects/retry';
import {projectEscape} from './models/projects/escape';
import {projectOverjammed} from './models/projects/overjammed';
import {projectTimeout} from './models/projects/timebot';
import {projectAngryShips} from './models/projects/angry-ships';
import {projectBookie} from './models/projects/bookie';
import {projectStarShip} from './models/projects/starships';
import {projectNimbleGiantChallenge} from './models/projects/nimble-giant-challenge';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public showHiddenProjects = false;
  public projectLimit = 9;
  public searchInput = '';

  constructor() {
  }

  ngOnInit() {
    this.initializeProjects();
  }

  private initializeProjects() {
    this.projects = [
      projectNawaiam,
      projectTimeout,
      projectOverjammed,
      projectAngryShips,
      projectGloomhaven,
      projectRetry,
      projectSunbox,
      projectNimbleGiantChallenge,
      projectEscape,
      projectGeorayos,
      projectBookie,
      projectStarShip
    ];
  }

}
