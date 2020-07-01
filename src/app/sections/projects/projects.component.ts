import {Component, OnInit} from '@angular/core';
import {Project} from './models/project';
import {projectNawaiam} from './models/projects/nawaiam';
import {projectSunbox} from './models/projects/sunbox';
import {projectStarShip} from './models/projects/starships';
import {projectGeorayos} from './models/projects/georayos';
import {projectGloomhaven} from './models/projects/gloomhaven';
import {projectBookie} from './models/projects/bookie';
import {projectRetry} from "./models/projects/retry";
import {projectEscape} from "./models/projects/escape";
import {projectOverjammed} from './models/projects/overjammed';
import {projectTimeout} from "./models/projects/timebot";
import {projectAngryShips} from "./models/projects/angry-ships";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];

  constructor(private route: ActivatedRoute,) {
  }


  ngOnInit() {
    this.initializeProjects();
    const id = this.route.snapshot.paramMap.get('id');
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
      projectEscape,
      projectGeorayos,
      // projectBookie,
      // projectStarShip
    ];
  }

}
