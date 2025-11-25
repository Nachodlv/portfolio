import {Component, Input, OnInit} from '@angular/core';
import {ProjectGroup} from '../../models/project-group';
import {ActivatedRoute} from "@angular/router";

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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (!this.projectGroups) {
      this.projectGroups = this.route.snapshot.data['projectGroups'];
    }
  }
}
