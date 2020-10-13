import {Pipe, PipeTransform} from '@angular/core';
import {Project} from '../sections/projects/models/project';

@Pipe({
  name: 'searchProject'
})
export class SearchProjectPipe implements PipeTransform {

  transform(projects: Project[], searchInput: string): Project[] {
    if (!searchInput) {
      return projects;
    }
    const lowerCaseSearch = searchInput.toLowerCase();
    return projects.filter(p =>
      p.title.toLowerCase().includes(lowerCaseSearch) ||
      p.technologies.some(t => t.name.toLowerCase().includes(lowerCaseSearch))
    );
  }

}
