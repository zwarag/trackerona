import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FederalState} from '../../federalState';
import {DataService} from '../../data.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-bundesland',
  templateUrl: './bundesland.component.html',
  styleUrls: ['./bundesland.component.scss']
})
export class BundeslandComponent implements OnInit {

  federalStates$: Observable<FederalState[]>;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.federalStates$ = this.data.getFederalStates().pipe(map(x => x.slice(-9)));
  }

}
