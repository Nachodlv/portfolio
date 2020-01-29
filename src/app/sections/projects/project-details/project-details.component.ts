import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Project} from '../models/project';
import {BsModalRef, ModalDirective} from 'ngx-bootstrap';
import {ProjectMediaType} from '../models/project-media';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {

  @Input() public project: Project;
  public mediaType = ProjectMediaType;
  public urlsSanitized?: SafeUrl[] = [];

  constructor(public bsModalRef: BsModalRef, public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.project.media.forEach(media => this.urlsSanitized.push(this.sanitizeUrl(media.source)));
  }

  private sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
