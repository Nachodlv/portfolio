import {Component, OnInit} from '@angular/core';
import {Project, projectNawaiam} from './models/project';

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
      projectNawaiam
    ];
  }

}
