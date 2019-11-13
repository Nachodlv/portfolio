import { Component, OnInit } from '@angular/core';
import {Work} from './work-experience/work';

@Component({
  selector: 'app-working-experience',
  templateUrl: './working-experiences.component.html',
  styleUrls: ['./working-experiences.component.scss']
})
export class WorkingExperiencesComponent implements OnInit {

  works: Work[] = [];

  constructor() { }

  ngOnInit() {
    const path = '../../../../assets/images/work-experience/sirius-logo.svg';
    this.works = [
      new Work('Sirius Software', path, new Date())
    ];
  }

}
