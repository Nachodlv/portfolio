import {Component, OnInit} from '@angular/core';
import {Project} from './models/project';
import {projectNawaiam} from './models/projects/nawaiam';
import {projectSunbox} from './models/projects/sunbox';
import {projectStarShip} from './models/projects/starships';
import {projectGeorayos} from './models/projects/georayos';
import {projectGloomhaven} from './models/projects/gloomhaven';
import {projectBookie} from './models/projects/bookie';
import {projectRetry} from "./models/projects/retry";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];

  constructor() {
  }

  ngOnInit() {
    this.projects = [
      projectNawaiam,
      projectGloomhaven,
      projectRetry,
      projectSunbox,
      projectGeorayos,
      projectBookie,
      projectStarShip
    ];
  }

}
