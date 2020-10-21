import {Component, HostBinding, OnInit} from '@angular/core';
import {projectAngryShips} from '../../models/projects/angry-ships';
import {projectOverjammed} from '../../models/projects/overjammed';
import {projectSunbox} from '../../models/projects/sunbox';
import {Project} from '../../models/project';
import {projectTimebot} from '../../models/projects/timebot';
import {projectEscape} from '../../models/projects/escape';
import {projectNimbleGiantChallenge} from '../../models/projects/nimble-giant-challenge';
import {projectNawaiam} from '../../models/projects/nawaiam';
import {projectGloomhaven} from '../../models/projects/gloomhaven';
import {projectBookie} from '../../models/projects/bookie';
import {projectStarShip} from '../../models/projects/starships';
import {projectRetry} from '../../models/projects/retry';
import {projectGeorayos} from '../../models/projects/georayos';
import {ProjectGroup} from '../../models/project-group';

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
  public projectGroups: ProjectGroup[] = [];

  constructor() {
  }

  ngOnInit() {
    this.initializeProjects();
  }

  private initializeProjects() {
    this.projects = [
      projectNawaiam,
      projectTimebot,
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
