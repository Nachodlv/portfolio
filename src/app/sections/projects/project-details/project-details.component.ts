import {Component, Input} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Project, ProjectDetailsPositioning} from '../../../models/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss', '../projects.component.scss'],
})
export class ProjectDetailsComponent {

  @Input() public project: Project;

  constructor(public bsModalRef: BsModalRef) {
  }

  closeModal() {
    this.bsModalRef.hide();
  }

  public readonly ProjectDetailsPositioning = ProjectDetailsPositioning;
}
