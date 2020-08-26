/*
 * Copyright (c) 2000 - 2020 by Raiffeisen Software GmbH.
 * All rights reserved.
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  @Input() title: string;
  @Input() desc: string;
  @Input() value: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
