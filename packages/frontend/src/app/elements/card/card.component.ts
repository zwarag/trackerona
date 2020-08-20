import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() desc: string;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
