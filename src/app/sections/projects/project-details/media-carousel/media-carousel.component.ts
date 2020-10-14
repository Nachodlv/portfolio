import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {PdfModalComponent} from '../pdf-modal/pdf-modal.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ProjectMedia, ProjectMediaType} from '../../../../models/project-media';


@Component({
  selector: 'app-media-carousel',
  templateUrl: './media-carousel.component.html',
  styleUrls: ['./media-carousel.component.scss']
})
export class MediaCarouselComponent implements OnInit {

  @Input() media: ProjectMedia[];
  public mediaType = ProjectMediaType;
  public urlsSanitized?: SafeUrl[] = [];
  public bsModalRef: BsModalRef;
  public carouselHovered: boolean;
  public currentSlideIsPDF: boolean;

  constructor(public sanitizer: DomSanitizer, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.media.forEach((media) => {
      this.urlsSanitized.push(this.sanitizeUrl(media.source));
    });
  }

  private sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public openPdf(pdfClicked: ProjectMedia) {
    const dataObject = {pdf: pdfClicked};
    this.bsModalRef = this.modalService.show(PdfModalComponent, {initialState: dataObject, class: 'modal-lg'});
  }

  public mouseEnterCarousel() {
    this.carouselHovered = true;
  }

  public mouseExitCarousel() {
    this.carouselHovered = false;
  }

  public onSlideChange(index: number) {
    this.currentSlideIsPDF = this.media[index].type === ProjectMediaType.PDF;
  }

  public slideClicked(index: number) {
    if (this.currentSlideIsPDF) {
      this.openPdf(this.media[index]);
    }
  }

}
