import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="nav">
      <a routerLink="" class="nav-link">home</a>
      <a routerLink="bundesland" class="nav-link">bundesland</a>
      <a routerLink="bezirk" class="nav-link">bezirk</a>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent {

}
