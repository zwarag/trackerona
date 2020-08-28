/*
 * Copyright (c) 2000 - 2020 by Raiffeisen Software GmbH.
 * All rights reserved.
 */

import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { FederalState } from '../../models/federal-state';
import { FederalDistrict } from '../../models/federal-district';
import { map } from 'rxjs/operators';
import { CountryData } from '../../models/country-data';

@Injectable({
  providedIn: 'root',
})
// @ts-ignore
export class DataStateService {

  readonly NFederalStates: number = 9;
  readonly NFederalDistricts: number = 94;

  readonly federalStates$: Observable<FederalState[]>;
  readonly federalStatesTimeLine$: Observable<FederalState[]>;
  readonly federalDistricts$: Observable<FederalDistrict[]>;
  readonly federalDistrictsTimeLine$: Observable<FederalDistrict[]>;
  readonly countryData$: Observable<CountryData>;

  constructor(
    private rest: RestService,
  ) {
    this.federalStatesTimeLine$ = this.initFederalStatesTimeLine();
    this.federalDistrictsTimeLine$ = this.initFederalDistrictsTimeLine();
    this.federalStates$ = this.initFederalStates();
    this.federalDistricts$ = this.initFederalDistricts();
    this.countryData$ = this.computeCountryData();
  }


  private initFederalStatesTimeLine(): Observable<FederalState[]> {
    return this.rest.getFederalStates();
  }

  private initFederalDistrictsTimeLine(): Observable<FederalDistrict[]> {
    return this.rest.getFederalDistricts();
  }

  /*
   * Returns the only the newest Information
   */
  private initFederalStates(): Observable<FederalState[]> {
    return this.federalStatesTimeLine$.pipe(
      map(x => x.slice(-this.NFederalStates)),
    );
  }

  /*
   * Returns the only the newest Information
   */
  private initFederalDistricts(): Observable<FederalDistrict[]> {
    return this.federalDistrictsTimeLine$.pipe(
      map(x => x.slice(-this.NFederalDistricts)),
    );
  }

  private computeCountryData(): Observable<CountryData> {
    return this.federalStates$.pipe(
      map((x) => {
        const austria: CountryData = {
          country: 'Österreich',
          recovered: x.map(e => e.recovered).reduce((acc, val) => acc += val),
          positive: x.map(e => e.positive).reduce((acc, val) => acc += val),
          positivePerResident: x.map(e => e.positivePerResident).reduce((acc, val) => acc += val),
          deaths: x.map(e => e.deaths).reduce((acc, val) => acc += val),
        };
        return austria;
      }),
    );
  }

}
