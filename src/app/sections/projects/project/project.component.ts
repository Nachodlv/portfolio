import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ProjectDetailsComponent} from '../project-details/project-details.component';
import {Project} from '../../../models/project';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', '../projects.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  @Input() project: Project;

  bsModalRef: BsModalRef;
  urlSubscription: Subscription;
  paramsSubscription: Subscription;
  url: string;

  constructor(private modalService: BsModalService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.urlSubscription = this.route.url
      .subscribe(([url]) => {
        this.url = url.path;
      });
    this.paramsSubscription = this.route.paramMap
      .subscribe((paramMap) => {
        const id = paramMap.get('id');
        if (id === this.project.id) {
          this.openProjectDetails();
        }
        else if (this.bsModalRef) {
          this.bsModalRef.hide();
        }
      });
  }

  ngOnDestroy() {
    this.urlSubscription?.unsubscribe();
    this.paramsSubscription?.unsubscribe();
    this.bsModalRef?.hide();
  }

  public openProjectDetails() {
    this.location.replaceState(`/${this.url}/${this.project.id}`);
    const dataObject = {project: this.project};
    this.bsModalRef = this.modalService.show(ProjectDetailsComponent, {initialState: dataObject, class: 'modal-lg'});
    this.bsModalRef.content.project = this.project;
    this.modalService.onHidden.subscribe(() => {
        this.bsModalRef = undefined;
        this.location.replaceState(`/${this.url}`);
    });
  }
}
