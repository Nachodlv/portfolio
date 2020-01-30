import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../models/project';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {

  @Input() public project: Project;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }


}
