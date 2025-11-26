import {Component, Input, OnInit} from '@angular/core';
import {ProjectGroup} from '../../models/project-group';
import {ActivatedRoute} from "@angular/router";
import {Project} from "../../models/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class ProjectsComponent implements OnInit {

  @Input() projectGroups: ProjectGroup[];

  public searchInput = '';
  public projects : Project[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (!this.projectGroups) {
      this.projectGroups = this.route.snapshot.data['projectGroups'];
    }
    this.projects = [].concat(...this.projectGroups.map(group => {
      return group.projects;
    }));
    console.log(this.projects);
  }
}
