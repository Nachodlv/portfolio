import { Component, OnInit } from '@angular/core';
import {envelopeIcon, githubIcon, linkedInIcon, userIcon} from '../../svgs/svgs';
import {ProjectMedia} from '../../models/project-media';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  githubIcon = githubIcon;
  linkedInIcon = linkedInIcon;
  envelopeIcon = envelopeIcon;
  userIcon = userIcon;

  getGoogleDriveUrl = ProjectMedia.getGoogleDriveUrl;

  curriculumUrl = 'assets/documents/curriculum/CurriculumEN.pdf';

  constructor() { }

  ngOnInit() {
  }

}
