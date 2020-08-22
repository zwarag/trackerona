import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Observable} from 'rxjs';
import {FederalState} from './federalState';
import {FederalDistrict} from './federalDistrict';
import {map} from 'rxjs/operators';
import {CountryData} from './countryData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly NFederalStates: number = 9;
  readonly NFederalDistricts: number = 94;

  readonly federalStates$: Observable<FederalState[]>;
  readonly federalStatesTimeLine$: Observable<FederalState[]>;
  readonly federalDistricts$: Observable<FederalDistrict[]>;
  readonly federalDistrictsTimeLine$: Observable<FederalDistrict[]>;
  readonly countryData$: Observable<CountryData>;

  constructor(
    private rest: RestService
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

  private computeCountryData(): Observable<CountryData> {
    return this.initFederalStates().pipe(
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

  /*
   * Returns the only the newest Information
   */
  private initFederalStates(): Observable<FederalState[]> {
    return this.federalStatesTimeLine$.pipe(
      map(x => x.slice(-this.NFederalStates))
    );
  }

  /*
   * Returns the only the newest Information
   */
  private initFederalDistricts(): Observable<FederalDistrict[]> {
    return this.federalDistrictsTimeLine$.pipe(
      map(x => x.slice(-this.NFederalDistricts))
    );
  }


}
