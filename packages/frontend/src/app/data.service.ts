import { Injectable } from '@angular/core';
import {RestService} from './rest.service';
import {Observable} from 'rxjs';
import {FederalState} from './federalState';
import {FederalDistrict} from './federalDistrict';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly NFederalStates: number = 9;
  readonly NFederalDistricts: number = 94;

  federalStates$: Observable<FederalState[]>;
  federalDistricts$: Observable<FederalDistrict[]>;

  constructor(
    private rest: RestService
  ) {
    this.federalStates$ = this.rest.getFederalStates();
    this.federalDistricts$ = this.rest.getFederalDistricts();
  }

  /*
   * Returns the only the newest Information
   */
  getFederalStates(): Observable<FederalState[]> {
    return this.federalStates$.pipe(
      map(x => x.slice(-this.NFederalStates))
    );
  }

  getFederalStatesTimeLine(): Observable<FederalState[]> {
    return this.federalStates$;
  }

  /*
   * Returns the only the newest Information
   */
  getFederalDistricts(): Observable<FederalDistrict[]> {
    return this.federalDistricts$.pipe(
      map(x => x.slice(-this.NFederalDistricts))
    );
  }

  getFederalDistrictsTimeLine(): Observable<FederalDistrict[]> {
    return this.federalDistricts$;
  }

}
