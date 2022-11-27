import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import { Location } from '@angular/common';
import {Project} from '../../../models/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss', '../projects.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {

  @Input() public project: Project;

  constructor(public bsModalRef: BsModalRef, private location: Location) {
  }

  ngOnInit() {
  }

  closeModal() {
    this.location.replaceState(`/projects`)
    this.bsModalRef.hide();
  }


}
