import {Component, Input, OnInit} from '@angular/core';
import {Work} from './work';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  @Input() work: Work;

  constructor() { }

  ngOnInit() {
  }

}
