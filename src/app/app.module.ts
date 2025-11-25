import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ButtonsModule, PopoverModule, ModalModule, CarouselModule, BsDropdownModule} from 'ngx-bootstrap';
import {AboutMeComponent} from './sections/about-me/about-me.component';
import {SectionsComponent} from './sections/sections.component';
import {WorkingExperiencesComponent} from './sections/working-experiences/working-experiences.component';
import {WorkExperienceComponent} from './sections/working-experiences/work-experience/work-experience.component';
import {ProjectsComponent} from './sections/projects/projects.component';
import {ProjectComponent} from './sections/projects/project/project.component';
import {TechnologyComponent} from './sections/projects/technology/technology.component';
import {ProjectDetailsComponent} from './sections/projects/project-details/project-details.component';
import {DurationPipe} from './pipes/duration-pipe';
import {CustomDatePipe} from './pipes/custom-date-pipe';
import {MediaCarouselComponent} from './sections/projects/project-details/media-carousel/media-carousel.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {PdfModalComponent} from './sections/projects/project-details/pdf-modal/pdf-modal.component';
import {CurriculumDropdownComponent} from './sections/about-me/curriculum-dropdown/curriculum-dropdown.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchProjectPipe} from './pipes/search-project.pipe';
import {FormsModule} from '@angular/forms';
import {CircularButtonComponent} from './sections/about-me/circular-button/circular-button.component';
import {TabsModule} from 'ngx-bootstrap/tabs';


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
    TechnologyComponent,
    ProjectDetailsComponent,
    DurationPipe,
    CustomDatePipe,
    MediaCarouselComponent,
    PdfModalComponent,
    CurriculumDropdownComponent,
    SearchProjectPipe,
    CircularButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    FormsModule,
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProjectDetailsComponent, PdfModalComponent]
})
export class AppModule {
}
