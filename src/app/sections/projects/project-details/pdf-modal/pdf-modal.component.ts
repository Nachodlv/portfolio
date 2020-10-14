import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {ProjectMedia} from '../../../../models/project-media';

@Component({
  selector: 'app-pdf-modal',
  templateUrl: './pdf-modal.component.html',
  styleUrls: ['./pdf-modal.component.scss']
})
export class PdfModalComponent implements OnInit {

  @Input() pdf: ProjectMedia;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

}
