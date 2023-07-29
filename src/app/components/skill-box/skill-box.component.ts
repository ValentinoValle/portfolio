import { Component, Input, ViewChild, ElementRef, AfterViewInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SkillBoxComponent implements AfterViewInit {

  @Input() svg: string;
  @Input() skill: string;
  @ViewChild('svgContainer') svgContainer: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.svgContainer.nativeElement.innerHTML = this.svg;
    let svgs = this.el.nativeElement.querySelectorAll('svg');
    let svgPaths = this.el.nativeElement.querySelectorAll('path');
    svgs.forEach((svg: any) => {
      this.renderer.addClass(svg, 'icon');
    })
    svgPaths.forEach((path: any) => {
      this.renderer.addClass(path, 'icon');
    })
  }
}
