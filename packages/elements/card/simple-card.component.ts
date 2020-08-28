import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent {

  @Input() title: string;
  @Input() desc: string;
  @Input() value: string;

}
