import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ButtonsModule, PopoverModule} from 'ngx-bootstrap';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SectionsComponent } from './sections/sections.component';
import { WorkingExperiencesComponent } from './sections/working-experiences/working-experiences.component';
import { WorkExperienceComponent } from './sections/working-experiences/work-experience/work-experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ProjectComponent } from './sections/projects/project/project.component';
import { TechnologyComponent } from './sections/projects/technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutMeComponent,
    SectionsComponent,
    WorkingExperiencesComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ProjectComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    PopoverModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
