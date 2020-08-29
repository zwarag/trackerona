import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { FederalState } from '../../models/federal-state';
import { FederalDistrict } from '../../models/federal-district';
import { map } from 'rxjs/operators';
import { CountryData } from '../../models/country-data';
import { FederalStatesPieChart } from '../../models/federal-states-pie-chart';
import { FederalDataTimeline } from "../../models/federal-data-timeline";

@Injectable({
  providedIn: 'root',
})
// @ts-ignore
export class DataStateService {

  readonly NFederalStates: number = 9;
  readonly NFederalDistricts: number = 94;

  federalStatesTimeLine: FederalDataTimeline<FederalState>;
  federalDistrictsTimeLine: FederalDataTimeline<FederalDistrict>;
  federalStatesSubject = new BehaviorSubject([]);
  federalStates$: Observable<FederalState[]> = this.federalStatesSubject;
  federalStatesTimeLineSubject = new BehaviorSubject<FederalDataTimeline<FederalState>>(new FederalDataTimeline<FederalState>());
  federalStatesTimeLine$: Observable<FederalDataTimeline<FederalState>> = this.federalStatesTimeLineSubject;
  federalDistrictsSubject = new BehaviorSubject([]);
  federalDistricts$: Observable<FederalDistrict[]> = this.federalDistrictsSubject;
  federalDistrictsTimeLineSubject = new BehaviorSubject<FederalDataTimeline<FederalDistrict>>(new FederalDataTimeline<FederalDistrict>());
  federalDistrictsTimeLine$: Observable<FederalDataTimeline<FederalDistrict>> = this.federalDistrictsTimeLineSubject;
  countryDataSubject = new BehaviorSubject(new CountryData());
  countryData$: Observable<CountryData> = this.countryDataSubject

  constructor(
    private rest: RestService,
  ) {
    Promise.all(
      [this.rest.getFederalDistrictsTimeLine().then(value => this.federalDistrictsTimeLine = value),
        this.rest.getFederalStatesTimeLine().then(value => this.federalStatesTimeLine = value)]
    ).then(() => {
      this.federalStatesTimeLineSubject.next(this.federalStatesTimeLine)
      this.federalDistrictsTimeLineSubject.next(this.federalDistrictsTimeLine);
      this.initFederalStates();
      this.initFederalDistricts();
      this.computeCountryData();
    })
  }


  /*
   * Returns the only the newest Information
   */
  private initFederalStates(): void {
    this.federalStatesTimeLine$.pipe(
      map(x => x.getLatest().slice(-this.NFederalStates)),
    ).subscribe(value => {
      this.federalStatesSubject.next(value)
    });
  }

  /*
   * Returns the only the newest Information
   */
  private initFederalDistricts(): void {
    this.federalDistrictsTimeLine$.pipe(
      map(x => x.getLatest().slice(-this.NFederalDistricts)),
    ).subscribe(value => {
      this.federalDistrictsSubject.next(value)
    });
  }

  private computeCountryData(): void {
    this.federalStates$.pipe(
      map((x) => {
        const austria: CountryData = {
          country: 'Österreich',
          recovered: x.map(e => e?.recovered).reduce((acc, val) => acc += val, 0),
          positive: x.map(e => e?.positive).reduce((acc, val) => acc += val, 0),
          positivePerResident: x.map(e => e?.positivePerResident).reduce((acc, val) => acc += val, 0),
          deaths: x.map(e => e?.deaths).reduce((acc, val) => acc += val, 0),
        };
        return austria;
      }),
    ).subscribe(value => this.countryDataSubject.next(value));
  }

  public getFederalStatesForBarChart(): FederalStatesPieChart {
    let d: FederalStatesPieChart = { labels: [], data: [{ data: [], label: 'Infizierte Pro Bundesland' }] };
    this.federalStates$.subscribe((states) => {
      for (let state of states) {
        d.labels.push(state.federalState);
        d.data[0].data.push(state.infected);
      }
    });
    return d;
  }
}
