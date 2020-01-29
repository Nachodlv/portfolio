import {Component, Input, OnInit} from '@angular/core';
import {Technology} from '../models/technologies';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  @Input() public technology: Technology;

  constructor() {
  }

  ngOnInit() {
  }

}
