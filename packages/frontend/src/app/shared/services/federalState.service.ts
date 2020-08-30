import { Injectable } from "@angular/core";
import { FederalDataTimeline } from "../../models/federal-data-timeline";
import { FederalState } from "../../models/federal-state";
import { BehaviorSubject, Observable } from "rxjs";
import { RestService } from "./rest.service";
import { map } from "rxjs/operators";
import { FederalStatesPieChart } from "../../models/federal-states-pie-chart";

@Injectable({
  providedIn: 'root',
})
export class FederalStateService {

  readonly NFederalStates: number = 9;
  private timeLine: FederalDataTimeline<FederalState>;
  private latestSubject = new BehaviorSubject([]);
  latest$: Observable<FederalState[]> = this.latestSubject;
  private timeLineSubject = new BehaviorSubject<FederalDataTimeline<FederalState>>(new FederalDataTimeline<FederalState>());
  timeLine$: Observable<FederalDataTimeline<FederalState>> = this.timeLineSubject;

  constructor(
    private rest: RestService
  ) {
    this.rest.getFederalStatesTimeLine()
      .then(value => this.timeLine = value)
      .then(value => this.timeLineSubject.next(value))
    this.initFederalStates();
  }

  /*
   * Returns the only the newest Information
   */
  private initFederalStates(): void {
    this.timeLine$.pipe(
      map(x => x.getLatest().slice(-this.NFederalStates)),
    ).subscribe(value => {
      this.latestSubject.next(value)
    });
  }

  public getFederalStatesForBarChart(): FederalStatesPieChart {
    let d: FederalStatesPieChart = { labels: [], data: [{ data: [], label: 'Infizierte Pro Bundesland' }] };
    this.latest$.subscribe((states) => {
      for (let state of states) {
        d.labels.push(state.federalState);
        d.data[0].data.push(state.infected);
      }
    });
    return d;
  }

}

