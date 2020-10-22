import {Pipe, PipeTransform} from '@angular/core';
import {Project} from '../models/project';
import {ProjectGroup} from '../models/project-group';

@Pipe({
  name: 'searchProject'
})
export class SearchProjectPipe implements PipeTransform {

  private static searchProjects(projects: Project[], searchInput: string): Project[] {
    return projects.filter(p =>
      p.title.toLowerCase().includes(searchInput) ||
      p.technologies.some(t => t.name.toLowerCase().includes(searchInput))
    );
  }

  transform(projectGroups: ProjectGroup[], searchInput: string): ProjectGroup[] {
    if (!searchInput) {
      return projectGroups;
    }
    const lowerCaseSearch = searchInput.toLowerCase();
    return projectGroups
      .filter(group =>
        group.name.toLowerCase().includes(lowerCaseSearch) ||
        SearchProjectPipe.searchProjects(group.projects, lowerCaseSearch).length > 0)
      .map(group =>
        new ProjectGroup(group.name, SearchProjectPipe.searchProjects(group.projects, lowerCaseSearch))
      );
  }
}
