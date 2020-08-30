import { Injectable } from "@angular/core";
import { FederalDataTimeline } from "../../models/federal-data-timeline";
import { FederalDistrict } from "../../models/federal-district";
import { BehaviorSubject, Observable } from "rxjs";
import { RestService } from "./rest.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
// @ts-ignore
export class FederalDistrictService {

  readonly NFederalDistricts: number = 94;

  private timeLine: FederalDataTimeline<FederalDistrict>;
  private latestSubject = new BehaviorSubject([]);
  latest$: Observable<FederalDistrict[]> = this.latestSubject;
  private timeLineSubject = new BehaviorSubject<FederalDataTimeline<FederalDistrict>>(new FederalDataTimeline<FederalDistrict>());
  timeLine$: Observable<FederalDataTimeline<FederalDistrict>> = this.timeLineSubject;

  constructor(
    private rest: RestService
  ) {
    this.rest.getFederalDistrictsTimeLine()
      .then(value => this.timeLine = value)
      .then(value => this.timeLineSubject.next(value))
    this.initFederalDistricts();
  }

  /*
   * Returns the only the newest Information
   */
  private initFederalDistricts(): void {
    this.timeLine$.pipe(
      map(x => x.getLatest().slice(-this.NFederalDistricts)),
    ).subscribe(value => {
      this.latestSubject.next(value)
    });
  }
}

