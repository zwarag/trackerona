import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Observable} from 'rxjs';
import {FederalState} from '../../federalState';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  federalStates$: Observable<FederalState[]>;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.federalStates$ = this.data.getFederalStates();
  }

}
