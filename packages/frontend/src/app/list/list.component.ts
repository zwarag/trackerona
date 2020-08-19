import {Component, OnInit} from '@angular/core';
import {RestService} from '../../rest.service';
import {Observable} from 'rxjs';
import {FederalState} from '../../federalStates';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  federalStates$: Observable<FederalState[]>;

  constructor(
    private rest: RestService
  ) {
  }

  ngOnInit(): void {
    this.federalStates$ = this.rest.getFederalStates()
      .pipe(
        map(e => e.slice(-9))
      );
  }

}
