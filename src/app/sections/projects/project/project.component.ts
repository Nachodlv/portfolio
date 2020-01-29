import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../models/project';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap';
import {ProjectDetailsComponent} from '../project-details/project-details.component';
import {animate} from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  public openProjectDetails() {
    const dataObject = {project: this.project};
    this.bsModalRef = this.modalService.show(ProjectDetailsComponent,  { initialState: dataObject, class: 'modal-lg' });
    this.bsModalRef.content.project = this.project;
  }

}
