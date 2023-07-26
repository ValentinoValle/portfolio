import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements AfterViewInit {

  @Input() logoHeight: string;
  @Input() logoWidth: string;

  @ViewChild('logoSvg') logo: ElementRef;

  ngAfterViewInit(): void {
    this.logo.nativeElement.style.height = this.logoHeight;
    this.logo.nativeElement.style.width = this.logoWidth;
  }

}
