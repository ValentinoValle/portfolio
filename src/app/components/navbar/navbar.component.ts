import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private translate: TranslocoService) { }

  changeLanguage() {
    if (this.translate.getActiveLang() == 'en') {
      this.translate.setActiveLang('es');
    } else {
      this.translate.setActiveLang('en');
    }
  }
}
