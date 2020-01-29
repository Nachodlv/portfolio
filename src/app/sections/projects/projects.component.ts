import { Component, OnInit } from '@angular/core';
import {Project} from './project/project';
import {Technologies} from './technology/technologies';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];

  constructor() { }

  ngOnInit() {
    this.projects = [
      new Project('Nawaiam', 'assets/images/projects/nawaiam/nawaiam2.jpeg', [Technologies.Unity, Technologies.CSharp]),
      new Project('Nawaiam', 'assets/images/projects/nawaiam/nawaiam2.jpeg', [Technologies.Unity, Technologies.CSharp]),
      new Project('Nawaiam', 'assets/images/projects/nawaiam/nawaiam2.jpeg', [Technologies.Unity, Technologies.CSharp]),
      new Project('Nawaiam', 'assets/images/projects/nawaiam/nawaiam2.jpeg', [Technologies.Unity, Technologies.CSharp]),
      new Project('Nawaiam', 'assets/images/projects/nawaiam/nawaiam2.jpeg', [Technologies.Unity, Technologies.CSharp]),
    ];
  }

}
