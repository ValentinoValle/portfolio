import { Component } from '@angular/core';
import { fader } from 'src/app/animations/route-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [ fader ]
})
export class ContactComponent {

}
