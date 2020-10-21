import {Component, OnInit} from '@angular/core';
import {engineCategory, GroupCategory, purposeCategory} from '../../../models/project-group';

@Component({
  selector: 'app-project-group-filter',
  templateUrl: './project-group-filter.component.html',
  styleUrls: ['./project-group-filter.component.scss']
})
export class ProjectGroupFilterComponent implements OnInit {

  groupCategories: GroupCategory[];

  constructor() {
  }

  ngOnInit(): void {
    this.groupCategories = [
      engineCategory,
      purposeCategory,
    ];
  }

}
