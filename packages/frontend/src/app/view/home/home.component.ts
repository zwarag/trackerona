import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FederalState} from '../../federalState';
import {DataService} from '../../data.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  federalStates$: Observable<FederalState[]>;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.federalStates$ = this.data.getFederalStates()
      .pipe(
        map(e => e.slice(-9))
      );
  }

}
