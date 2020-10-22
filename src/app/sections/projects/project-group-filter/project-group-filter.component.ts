import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {engineCategory, GroupCategory, ProjectGroup, purposeCategory} from '../../../models/project-group';

@Component({
  selector: 'app-project-group-filter',
  templateUrl: './project-group-filter.component.html',
  styleUrls: ['./project-group-filter.component.scss']
})
export class ProjectGroupFilterComponent implements OnInit {

  @Output() projectGroups = new EventEmitter<ProjectGroup[]>();

  groupCategories: GroupCategory[];
  groupCategorySelected: GroupCategory;
  projectGroupsSelected: boolean[];

  constructor() {
  }

  ngOnInit(): void {
    this.groupCategories = [
      engineCategory,
      purposeCategory,
    ];
    this.onGroupCategorySelected(this.groupCategories[0]);
  }

  onGroupCategorySelected(groupCategory: GroupCategory): void {
    this.groupCategorySelected = groupCategory;
    this.projectGroupsSelected = this.groupCategorySelected.projectGroups.map(_ => true);
    this.projectGroups.emit(this.groupCategorySelected.projectGroups);
  }

  onProjectGroupSelected(isSelected: boolean, index: number): void {
    this.projectGroupsSelected[index] = isSelected;
    this.projectGroups.emit(this.groupCategorySelected.projectGroups.filter((group, i) => this.projectGroupsSelected[i]));
  }
}
