import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FederalState} from '../federalState';
import {map} from 'rxjs/operators';
import {DataService} from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  federalStates$: Observable<FederalState[]>;

  constructor(
    private data: DataService
  ) {
  }

  ngOnInit(): void {
    this.federalStates$ = this.data.getFederalStates()
      .pipe(
        map(e => e.slice(-9))
      );
  }

}
