import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Observable} from 'rxjs';
import {FederalState} from './federalState';
import {FederalDistrict} from './federalDistrict';
import {map, tap} from 'rxjs/operators';
import {CountryData} from './countryData';

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

  getCountryData(): Observable<CountryData> {
    const austria: CountryData = {
      country: 'Österreich',
      genesene: 0,
      positiv: 0,
      positiv_pro_ew: 0,
      verstorbene: 0,
    };
    this.getFederalStates().pipe(
      tap(x => austria.genesene = x.map(y => y.verstorbene).reduce((acc, sum) => acc += sum)),
      tap(x => austria.positiv = x.map(y => y.positiv).reduce((acc, sum) => acc += sum)),
      tap(x => austria.positiv_pro_ew = x.map(y => y.positiv_pro_ew).reduce((acc, sum) => acc += sum)),
      tap(x => austria.verstorbene = x.map(y => y.verstorbene).reduce((acc, sum) => acc += sum)),
    );
    return new Observable<CountryData>(subscriber => subscriber.next(austria));
  }

}
