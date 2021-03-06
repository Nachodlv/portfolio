import {Component, OnInit} from '@angular/core';
import {Curriculum} from './curriculum';
import {userIcon} from '../../../svgs/svgs';

@Component({
  selector: 'app-curriculum-dropdown',
  templateUrl: './curriculum-dropdown.component.html',
  styleUrls: ['./curriculum-dropdown.component.scss']
})
export class CurriculumDropdownComponent implements OnInit {

  public curriculum: Curriculum[];
  userIcon = userIcon;

  constructor() {
  }

  ngOnInit() {
    this.curriculum = [
      new Curriculum('assets/documents/curriculum/CurriculumEN.pdf', 'English'),
      new Curriculum('assets/documents/curriculum/CurriculumES.pdf', 'Spanish'),
    ];
  }

}
