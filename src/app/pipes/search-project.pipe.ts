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

  transform(projects: Project[], searchInput: string): Project[] {
    if (!searchInput) {
      return projects;
    }
    const lowerCaseSearch = searchInput.toLowerCase();
    return SearchProjectPipe.searchProjects(projects, lowerCaseSearch);
  }
}
