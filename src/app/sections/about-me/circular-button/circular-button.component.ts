import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-circular-button',
  templateUrl: './circular-button.component.html',
  styleUrls: ['./circular-button.component.scss']
})
export class CircularButtonComponent implements OnInit, AfterViewInit {

  svgElementsSelected: SVGSVGElement;

  @Input() svg: string;
  @Input() href: string;
  @Input() buttonPopover: string;
  @Input() text: string;

  // Popover Dropdown
  @Input() dropdownToggle: boolean;
  @Input() ariaControls: string;
  @Input() popOverId: string;

  // SVG Position
  @Input() width = 0;
  @Input() height = 0;
  @Input() x = 0;
  @Input() y = 0;

  @ViewChild('svgElement') svgElement: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.svgElement.nativeElement.innerHTML = this.svg;
  }

}
