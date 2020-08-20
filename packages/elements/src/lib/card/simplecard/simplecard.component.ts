import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-simplecard',
  templateUrl: './simplecard.component.html',
  styleUrls: ['./simplecard.component.scss']
})
export class SimplecardComponent implements OnInit {

  @Input() title: string;
  @Input() desc: string;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
