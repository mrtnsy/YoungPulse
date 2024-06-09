
import { Component, HostBinding } from '@angular/core';
import { slideInAnimation } from '../shared/route-animations';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
  animations: [slideInAnimation]
})
export class SobreComponent {

}
