import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './sections/projects/projects.component';
import {personalProjects, professionalProjects} from "./models/project-group";


const routes: Routes = [
  { path: '', redirectTo: '/personal-projects', pathMatch: 'full'},
  { path: 'personal-projects', component: ProjectsComponent, data: { projectGroups: personalProjects } },
  { path: 'personal-projects/:id', component: ProjectsComponent, data: { projectGroups: personalProjects }  },
  { path: 'professional-projects', component: ProjectsComponent, data: { projectGroups: professionalProjects }  },
  { path: 'professional-projects/:id', component: ProjectsComponent, data: { projectGroups: professionalProjects }  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
