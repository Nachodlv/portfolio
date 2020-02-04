import {Component, OnInit} from '@angular/core';
import {Curriculum} from './curriculum';

@Component({
  selector: 'app-curriculum-dropdown',
  templateUrl: './curriculum-dropdown.component.html',
  styleUrls: ['./curriculum-dropdown.component.scss']
})
export class CurriculumDropdownComponent implements OnInit {

  public curriculum: Curriculum[];

  constructor() {
  }

  ngOnInit() {
    this.curriculum = [
      new Curriculum('assets/documents/curriculum/CurriculumES.pdf', 'Español'),
      new Curriculum('assets/documents/curriculum/CurriculumEN.pdf', 'English')
    ];
  }

}
