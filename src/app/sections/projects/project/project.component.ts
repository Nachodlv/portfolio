import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap';
import {ProjectDetailsComponent} from '../project-details/project-details.component';
import {Project} from '../../../models/project';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', '../projects.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === this.project.id) {
      this.openProjectDetails();
    }
  }

  public openProjectDetails() {
    this.location.replaceState(`/projects/${this.project.id}`);
    const dataObject = {project: this.project};
    this.bsModalRef = this.modalService.show(ProjectDetailsComponent, {initialState: dataObject, class: 'modal-lg'});
    this.bsModalRef.content.project = this.project;
    this.modalService.onHide.subscribe((event) => {
      if (event === 'backdrop-click') {
        this.location.replaceState(`/projects`);
      }
    });
  }

}
