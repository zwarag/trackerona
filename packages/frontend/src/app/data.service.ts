import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Observable} from 'rxjs';
import {FederalState} from './federalState';
import {FederalDistrict} from './federalDistrict';
import {map, shareReplay, tap} from 'rxjs/operators';
import {CountryData} from './countryData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly NFederalStates: number = 9;
  readonly NFederalDistricts: number = 94;

  federalStates$: Observable<FederalState[]>;
  federalDistricts$: Observable<FederalDistrict[]>;
  readonly countryData$: Observable<CountryData>;

  constructor(
    private rest: RestService
  ) {
    this.federalStates$ = this.rest.getFederalStates().pipe(shareReplay());
    this.federalDistricts$ = this.rest.getFederalDistricts();
    this.countryData$ = this.computeCountryData();
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

  private computeCountryData(): Observable<CountryData> {
    return this.getFederalStates().pipe(
      map(x => {
        const austria: CountryData = {
          country: 'Österreich',
          genesene: x.map(e => e.genesene).reduce((acc, val) => acc += val),
          positiv: x.map(e => e.positiv).reduce((acc, val) => acc += val),
          positiv_pro_ew: x.map(e => e.positiv_pro_ew).reduce((acc, val) => acc += val),
          verstorbene: x.map(e => e.verstorbene).reduce((acc, val) => acc += val)
        };
        return austria;
      })
    );
  }

}
