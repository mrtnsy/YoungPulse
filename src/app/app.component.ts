import { Component, HostBinding } from '@angular/core';
import { slideInAnimation } from './shared/route-animations';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {

  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  divAtiva = false;

  mobileMenu(){
    this.divAtiva = !this.divAtiva;
  }
}
