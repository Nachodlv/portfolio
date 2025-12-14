import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './sections/projects/projects.component';
import {allProjects, personalGroup, professionalGroup, talksGroup} from "./models/project-group";


const routes: Routes = [
  { path: '', redirectTo: '/professional-projects', pathMatch: 'full'},
  { path: 'personal-projects', component: ProjectsComponent, data: { projectGroups: personalGroup } },
  { path: 'personal-projects/:id', component: ProjectsComponent, data: { projectGroups: personalGroup }  },
  { path: 'talks', component: ProjectsComponent, data: { projectGroups: talksGroup }  },
  { path: 'talks/:id', component: ProjectsComponent, data: { projectGroups: talksGroup }  },
  { path: 'professional-projects', component: ProjectsComponent, data: { projectGroups: professionalGroup }  },
  { path: 'professional-projects/:id', component: ProjectsComponent, data: { projectGroups: professionalGroup }  },
  { path: 'all-projects', component: ProjectsComponent, data: { projectGroups: allProjects } },
  { path: 'all-projects/:id', component: ProjectsComponent, data: { projectGroups: allProjects } },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
